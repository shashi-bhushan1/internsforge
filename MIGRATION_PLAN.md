# Migration Plan: Static Course Pages to Dynamic Route Template

**Project:** InternsForge  
**Goal:** Migrate from 39+ individual course page files to dynamic route template  
**Prerequisites:** Complete `PRE_MIGRATION_CHECKLIST.md` first  
**Date Started:** [Fill when starting]  
**Status:** ⏳ Not Started

---

## ⚠️ IMPORTANT: Read Before Starting

- **DO NOT start until `PRE_MIGRATION_CHECKLIST.md` is complete**
- **DO NOT skip any step**
- **DO NOT proceed to next step until current step is verified**
- **Test after each major step**
- **Keep old files until migration is 100% complete and tested**

---

## 📋 Migration Overview

### What We're Doing:
- ✅ Creating SEO component (reduces duplication)
- ✅ Creating unified course data file
- ✅ Implementing dynamic route template for 36 standard courses
- ✅ Keeping 3 advanced courses as static pages
- ✅ Removing duplicate static course pages

### Advanced Courses (Keep Static):
1. `cyber-security-advanced` → `/courses/cyber-security-advanced/page.tsx`
2. `full-stack-web-development-mern` → `/courses/full-stack-web-development-mern/page.tsx`
3. `network-security` → `/courses/network-security/page.tsx`

### Standard Courses (Use Dynamic Route):
All other 36 courses → `/courses/[slug]/page.tsx`

---

## 🚀 Migration Steps

---

### Step 1: Create SEO StructuredData Component

**Purpose:** Centralize structured data generation to reduce duplication

**Action:** Create reusable SEO component

1. **Create folder:**
   ```bash
   mkdir -p src/components/seo
   ```

2. **Create file:** `src/components/seo/StructuredData.tsx`

   **Copy this code:**
   ```typescript
   interface CourseStructuredDataProps {
     name: string;
     description: string;
     courseCode: string;
     provider?: {
       name: string;
       url: string;
     };
     educationalLevel?: string;
   }

   interface OrganizationStructuredDataProps {
     name: string;
     description: string;
     url: string;
     logo?: string;
     contactPoint?: {
       telephone: string;
       email: string;
       contactType: string;
       areaServed: string;
       availableLanguage: string;
     };
     address?: {
       streetAddress: string;
       addressLocality: string;
       addressRegion: string;
       postalCode: string;
       addressCountry: string;
     };
     sameAs?: string[];
   }

   interface BreadcrumbStructuredDataProps {
     items: Array<{
       name: string;
       url: string;
     }>;
   }

   type StructuredDataProps = 
     | { type: 'Course'; data: CourseStructuredDataProps }
     | { type: 'Organization'; data: OrganizationStructuredDataProps }
     | { type: 'BreadcrumbList'; data: BreadcrumbStructuredDataProps };

   export function StructuredData({ type, data }: StructuredDataProps) {
     let structuredData: any;

     switch (type) {
       case 'Course':
         structuredData = {
           "@context": "https://schema.org",
           "@type": "Course",
           "name": data.name,
           "description": data.description,
           "provider": {
             "@type": "EducationalOrganization",
             "name": data.provider?.name || "InternsForge",
             "url": data.provider?.url || "https://internsforge.com"
           },
           "courseCode": data.courseCode,
           "educationalLevel": data.educationalLevel || "Advanced"
         };
         break;

       case 'Organization':
         structuredData = {
           "@context": "https://schema.org",
           "@type": "EducationalOrganization",
           "name": data.name,
           "description": data.description,
           "url": data.url,
           ...(data.logo && { "logo": data.logo }),
           ...(data.contactPoint && {
             "contactPoint": {
               "@type": "ContactPoint",
               "telephone": data.contactPoint.telephone,
               "contactType": data.contactPoint.contactType,
               "email": data.contactPoint.email,
               "areaServed": data.contactPoint.areaServed,
               "availableLanguage": data.contactPoint.availableLanguage
             }
           }),
           ...(data.address && {
             "address": {
               "@type": "PostalAddress",
               "streetAddress": data.address.streetAddress,
               "addressLocality": data.address.addressLocality,
               "addressRegion": data.address.addressRegion,
               "postalCode": data.address.postalCode,
               "addressCountry": data.address.addressCountry
             }
           }),
           ...(data.sameAs && data.sameAs.length > 0 && { "sameAs": data.sameAs })
         };
         break;

       case 'BreadcrumbList':
         structuredData = {
           "@context": "https://schema.org",
           "@type": "BreadcrumbList",
           "itemListElement": data.items.map((item, index) => ({
             "@type": "ListItem",
             "position": index + 1,
             "name": item.name,
             "item": item.url
           }))
         };
         break;
     }

     return (
       <script
         type="application/ld+json"
         dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
       />
     );
   }
   ```

3. **Verify TypeScript compiles:**
   ```bash
   npm run build
   ```
   Should compile without errors

**Checkpoint:**
- [ ] File created at `src/components/seo/StructuredData.tsx`
- [ ] TypeScript compiles without errors
- [ ] No syntax errors

**Next Step:** Proceed to Step 2

---

### Step 2: Create Unified Course Data File

**Purpose:** Central repository for all course metadata

**Action:** Create course data file

1. **Create file:** `src/data/courses.ts`

2. **Add this base structure:**
   ```typescript
   import { CourseType } from '@/components/courses/curriculum/types';
   import { getPaymentLinks } from './paymentLinks';

   export interface Course {
     slug: string;
     title: string;
     description: string;
     shortDescription: string;
     courseCode: string;
     metaDescription: string;
     courseName: string; // For hero section
     image: string;
     chapters: number;
     lessons: number;
     capstoneProjects: number;
     courseType: CourseType;
     curriculumName?: string;
     paymentSlug: string;
     category: 'Advanced' | 'Computer Science / IT' | 'ECE/EEE' | 'Mechanical' | 'Civil' | 'Commerce & Management' | 'Other';
   }

   export const courses: Record<string, Course> = {
     // We'll add courses here
   };

   export function getCourse(slug: string): Course | null {
     return courses[slug] || null;
   }

   export function getAllCourses(): Course[] {
     return Object.values(courses);
   }

   export function getCoursesByCategory(category: string): Course[] {
     return Object.values(courses).filter(course => course.category === category);
   }
   ```

3. **Add 3 test courses first. Use this template:**

   **Template for each course:**
   ```typescript
   'course-slug': {
     slug: 'course-slug',
     title: 'Course Title', // From metadata.title
     description: 'Full description', // From CourseHeroWrapper defaultDescription
     shortDescription: 'Short description', // From metadata.description
     courseCode: 'CODE-001', // From structuredData.courseCode
     metaDescription: 'Meta description', // From structuredData.description
     courseName: 'Display Name', // From CourseHeroWrapper courseName
     image: 'https://images.unsplash.com/...', // From CourseHeroWrapper defaultImage
     chapters: 9, // From CourseHeroWrapper chapters
     lessons: 54, // From CourseHeroWrapper lessons
     capstoneProjects: 2, // From CourseKeyBenefits capstoneProjects
     courseType: 'web-development', // Must match CourseType from types.ts
     curriculumName: 'Course Name', // From CourseCurriculum courseName
     paymentSlug: 'web-development', // Must match key in paymentLinks.ts
     category: 'Computer Science / IT', // Or appropriate category
   },
   ```

   **Example - Web Development (copy from existing page):**
   ```typescript
   'web-development': {
     slug: 'web-development',
     title: 'Web Development Course',
     description: 'Build modern, responsive web applications. Learn HTML, CSS, JavaScript, and industry-standard technologies to create scalable solutions.',
     shortDescription: 'Learn Web Development with InternsForge. Master HTML, CSS, JavaScript, and modern frameworks.',
     courseCode: 'WEB-DEV-001',
     metaDescription: 'Comprehensive Web Development course covering HTML, CSS, JavaScript, and modern frameworks. Build real-world projects and advance your career.',
     courseName: 'Master Web Development',
     image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
     chapters: 9,
     lessons: 54,
     capstoneProjects: 2,
     courseType: 'web-development',
     curriculumName: 'Web Development Course',
     paymentSlug: 'web-development',
     category: 'Computer Science / IT',
   },
   ```

4. **Add 3 test courses:**
   - Open existing course page (e.g., `src/app/courses/web-development/page.tsx`)
   - Copy data from that file
   - Add to `courses.ts` using template
   - Repeat for `python` and `data-science`

5. **Verify:**
   ```bash
   npm run build
   ```
   Should compile without errors

**Checkpoint:**
- [ ] File created at `src/data/courses.ts`
- [ ] 3 test courses added (web-development, python, data-science)
- [ ] TypeScript compiles
- [ ] All slugs match existing course routes
- [ ] All courseType values exist in CourseType
- [ ] All paymentSlug values exist in paymentLinks.ts

**Next Step:** Proceed to Step 3

---

### Step 3: Create Dynamic Route Template

**Purpose:** Single template that handles all standard courses

**Action:** Create dynamic route page

1. **Create folder:**
   ```bash
   mkdir -p "src/app/courses/[slug]"
   ```
   Note: The `[slug]` folder name must have brackets

2. **Create file:** `src/app/courses/[slug]/page.tsx`

3. **Copy this code:**
   ```typescript
   import type { Metadata } from "next";
   import { notFound } from "next/navigation";
   import { Suspense } from "react";
   import Header from "@/components/common/Header";
   import Footer from "@/components/common/Footer";
   import CourseHeroWrapper from "@/components/courses/CourseHeroWrapper";
   import CourseKeyBenefits from "@/components/courses/CourseKeyBenefits";
   import CourseCurriculum from "@/components/courses/CourseCurriculum";
   import PricingPlans from "@/components/courses/PricingPlans";
   import CertificateSection from "@/components/courses/CertificateSection";
   import AlumniWorksAt from "@/components/common/AlumniWorksAt";
   import InvestInYourself from "@/components/common/InvestInYourself";
   import StudentTestimonials from "@/components/common/StudentTestimonials";
   import FAQ from "@/components/common/FAQ";
   import { getCourse } from "@/data/courses";
   import { getPaymentLinks } from "@/data/paymentLinks";
   import { StructuredData } from "@/components/seo/StructuredData";

   export async function generateStaticParams() {
     const { getAllCourses } = await import('@/data/courses');
     const allCourses = getAllCourses();
     
     return allCourses.map((course) => ({
       slug: course.slug,
     }));
   }

   export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
     const course = getCourse(params.slug);
     
     if (!course) {
       return {
         title: 'Course Not Found',
       };
     }
     
     return {
       title: course.title,
       description: course.metaDescription,
       openGraph: {
         title: `${course.title} - InternsForge`,
         description: course.shortDescription,
         url: `https://internsforge.com/courses/${course.slug}`,
       },
       twitter: {
         title: `${course.title} - InternsForge`,
         description: course.shortDescription,
       },
     };
   }

   export default function CoursePage({ params }: { params: { slug: string } }) {
     const course = getCourse(params.slug);
     
     if (!course) {
       notFound();
     }
     
     const paymentLinks = getPaymentLinks(course.paymentSlug);
     
     return (
       <>
         <StructuredData
           type="Course"
           data={{
             name: course.title,
             description: course.metaDescription,
             courseCode: course.courseCode,
             educationalLevel: "Advanced"
           }}
         />
         <div className="min-h-screen bg-brand-page">
           <Header />
           <main className="w-full">
             <Suspense fallback={<div className="h-[400px] bg-brand-page" />}>
               <CourseHeroWrapper
                 courseName={course.courseName}
                 defaultDescription={course.description}
                 defaultImage={course.image}
                 price="$85.00"
                 chapters={course.chapters}
                 lessons={course.lessons}
               />
             </Suspense>
             <CourseKeyBenefits 
               capstoneProjects={course.capstoneProjects}
             />
             <CourseCurriculum 
               courseType={course.courseType} 
               courseName={course.curriculumName || course.title} 
             />
             <PricingPlans 
               selfPacedLink={paymentLinks?.selfPaced.link}
               mentorLedLink={paymentLinks?.mentorLed.link}
               selfPacedPrice={`₹${paymentLinks?.selfPaced.fee.toLocaleString('en-IN')}`}
               mentorLedPrice={`₹${paymentLinks?.mentorLed.fee.toLocaleString('en-IN')}`}
             />
             <CertificateSection />
             <AlumniWorksAt />
             <InvestInYourself />
             <StudentTestimonials />
             <FAQ />
           </main>
           <Footer />
         </div>
       </>
     );
   }
   ```

4. **Verify:**
   ```bash
   npm run build
   ```
   Should compile without errors

5. **Test with one course:**
   - Start dev server: `npm run dev`
   - Visit: `http://localhost:3000/courses/web-development`
   - Should display correctly
   - Check browser console for errors

**Checkpoint:**
- [ ] File created at `src/app/courses/[slug]/page.tsx`
- [ ] TypeScript compiles
- [ ] Test course page loads correctly
- [ ] No console errors
- [ ] Curriculum displays
- [ ] Payment links work

**Next Step:** Proceed to Step 4

---

### Step 4: Test Dynamic Route with 3 Courses

**Action:** Verify dynamic route works for test courses

1. **Test these URLs:**
   - `/courses/web-development`
   - `/courses/python`
   - `/courses/data-science`

2. **For each course, verify:**
   - [ ] Page loads without errors
   - [ ] Hero section displays correctly
   - [ ] Curriculum displays correctly
   - [ ] Payment links work
   - [ ] All components render
   - [ ] No console errors
   - [ ] Metadata is correct (view page source)

3. **Compare with old pages:**
   - [ ] Content matches old static page
   - [ ] Layout is identical
   - [ ] All functionality works

**Checkpoint:**
- [ ] All 3 test courses work via dynamic route
- [ ] No regressions found
- [ ] Ready to add remaining courses

**Next Step:** Proceed to Step 5

---

### Step 5: Add All Remaining Courses to courses.ts

**Action:** Complete the course data file

1. **Open:** `src/data/courses.ts`

2. **For each remaining course:**
   - Open existing `page.tsx` file
   - Copy data using template from Step 2
   - Add to `courses.ts`
   - Verify `courseType` matches CourseType
   - Verify `paymentSlug` exists in paymentLinks.ts

3. **Courses to add (33 remaining - excluding the 3 advanced ones):**
   - amazon-web-services
   - android-app-development
   - artificial-intelligence
   - autocad
   - battery-electric-vehicles
   - bio-informatics
   - business-analytics
   - cloud-computing
   - construction-planning
   - cyber-security (NOT advanced)
   - data-analytics
   - data-structure-algorithm
   - digital-marketing
   - drone-mechanics
   - embedded-systems
   - finance
   - full-stack-web-development (NOT MERN)
   - game-development
   - genetic-engineering
   - human-resources-management
   - hybrid-electrical-vehicles
   - ic-engine
   - internet-of-things
   - java
   - machine-learning
   - medical-coding
   - nano-technology
   - operation-management
   - psychology
   - robotics
   - stock-market
   - ui-ux-design
   - vlsi

4. **Verify after adding all:**
   ```bash
   npm run build
   ```
   Should compile without errors

**Checkpoint:**
- [ ] All 36 standard courses added to courses.ts
- [ ] TypeScript compiles
- [ ] All slugs are unique
- [ ] All courseType values valid
- [ ] All paymentSlug values exist
- [ ] 3 advanced courses NOT added (they stay static)

**Next Step:** Proceed to Step 6

---

### Step 6: Test All Dynamic Routes

**Action:** Comprehensive testing

1. **Build project:**
   ```bash
   npm run build
   ```
   Should succeed

2. **Test at least 10 random courses:**
   - Visit each course page
   - Verify all display correctly
   - Check for errors

3. **Test special cases still work:**
   - `/courses/cyber-security-advanced` (should still use static page)
   - `/courses/full-stack-web-development-mern` (should still use static page)
   - `/courses/network-security` (should still use static page)

**Checkpoint:**
- [ ] Build succeeds
- [ ] Multiple courses tested
- [ ] No errors found
- [ ] Special cases still work

**Next Step:** Proceed to Step 7

---

### Step 7: Update Routing Logic (Header & TopFeaturedCourses)

**Action:** Ensure navigation routes to dynamic pages

1. **File:** `src/components/common/Header.tsx`

2. **Find `getCourseRoute` function**

3. **Verify it routes correctly:**
   - Standard courses → `/courses/[slug]` (dynamic)
   - Advanced courses → their static pages

4. **File:** `src/components/home/TopFeaturedCourses.tsx`

5. **Find `getCourseRoute` function**

6. **Verify same routing logic**

7. **Test navigation:**
   - [ ] Click course from header dropdown
   - [ ] Click course from home page
   - [ ] All routes work correctly

**Checkpoint:**
- [ ] Routing logic updated
- [ ] Navigation works from header
- [ ] Navigation works from home page
- [ ] All routes correct

**Next Step:** Proceed to Step 8

---

### Step 8: Remove Old Static Course Pages

**⚠️ CRITICAL: Only do this after Step 6 is 100% verified!**

**Action:** Delete old static course page folders

1. **Verify dynamic routes work:**
   - Test at least 10 courses
   - All should work via `/courses/[slug]`

2. **Keep these static pages (DO NOT DELETE):**
   - `/src/app/courses/cyber-security-advanced/`
   - `/src/app/courses/full-stack-web-development-mern/`
   - `/src/app/courses/network-security/`

3. **Delete old static course folders (36 courses):**
   
   **List of folders to delete:**
   ```
   web-development
   python
   data-science
   amazon-web-services
   android-app-development
   artificial-intelligence
   autocad
   battery-electric-vehicles
   bio-informatics
   business-analytics
   cloud-computing
   construction-planning
   cyber-security
   data-analytics
   data-structure-algorithm
   digital-marketing
   drone-mechanics
   embedded-systems
   finance
   full-stack-web-development
   game-development
   genetic-engineering
   human-resources-management
   hybrid-electrical-vehicles
   ic-engine
   internet-of-things
   java
   machine-learning
   medical-coding
   nano-technology
   operation-management
   psychology
   robotics
   stock-market
   ui-ux-design
   vlsi
   ```

   **Delete one at a time to be safe:**
   ```bash
   rm -rf src/app/courses/web-development
   rm -rf src/app/courses/python
   # ... continue for all
   ```

4. **Verify build still works:**
   ```bash
   npm run build
   ```
   Should succeed

5. **Test again:**
   - Visit several course pages
   - Verify they still work

**Checkpoint:**
- [ ] Old static pages deleted (36 courses)
- [ ] Advanced courses still exist (3 courses)
- [ ] Build succeeds
- [ ] All courses still accessible
- [ ] Special cases still work

**Next Step:** Proceed to Step 9

---

### Step 9: Final Testing & Verification

**Action:** Comprehensive final testing

1. **Test all course pages:**
   - [ ] Visit all 36 standard courses
   - [ ] All load correctly
   - [ ] All display correctly

2. **Test special cases:**
   - [ ] `/courses/cyber-security-advanced` works
   - [ ] `/courses/full-stack-web-development-mern` works
   - [ ] `/courses/network-security` works

3. **Test navigation:**
   - [ ] Header navigation works
   - [ ] Home page course links work
   - [ ] All routes correct

4. **Test functionality:**
   - [ ] Payment links work
   - [ ] Curriculum displays
   - [ ] All components render

5. **Check for errors:**
   - [ ] No console errors
   - [ ] No TypeScript errors
   - [ ] Build succeeds

6. **Test production build:**
   ```bash
   npm run build
   npm start
   ```
   Test in production mode

**Checkpoint:**
- [ ] All tests pass
- [ ] No errors found
- [ ] Production build works
- [ ] Ready for deployment

**Next Step:** Proceed to Step 10

---

### Step 10: Git Commit - Final Migration

**Action:** Commit completed migration

1. **Check status:**
   ```bash
   git status
   ```

2. **Stage changes:**
   ```bash
   git add .
   ```

3. **Commit:**
   ```bash
   git commit -m "Migration: Dynamic course routes with unified data structure

   - Created SEO StructuredData component
   - Created unified courses.ts data file
   - Implemented dynamic [slug] route template
   - Removed 36 duplicate static course pages
   - Maintained 3 advanced courses as static pages
   - All standard courses now use dynamic routing"
   ```

4. **Verify commit:**
   ```bash
   git log --oneline -1
   ```

**Checkpoint:**
- [ ] Changes committed
- [ ] Commit message descriptive
- [ ] Ready for deployment

---

## 🎉 Migration Complete!

### Summary of Changes:
- ✅ Created SEO component (reduces duplication)
- ✅ Created unified course data file
- ✅ Implemented dynamic route template
- ✅ Removed 36 duplicate static pages
- ✅ Maintained 3 advanced courses as static
- ✅ All functionality preserved

### Files Created:
- `src/components/seo/StructuredData.tsx`
- `src/data/courses.ts`
- `src/app/courses/[slug]/page.tsx`

### Files Removed:
- 36 static course page folders (kept 3 advanced courses)

---

## 🔄 Rollback Instructions

If you need to rollback:

1. **To previous commit:**
   ```bash
   git reset --hard HEAD~1
   ```

2. **Or to backup commit:**
   ```bash
   git log --oneline
   # Find backup commit hash
   git reset --hard <commit-hash>
   ```

3. **Or restore from branch:**
   ```bash
   git checkout main
   ```

---

## 📝 Notes

- **Special Cases:** `cyber-security-advanced`, `full-stack-web-development-mern`, and `network-security` remain as static pages
- **Curriculum Files:** All curriculum files in `/components/courses/curriculum/` remain unchanged
- **Payment Links:** Payment links in `/data/paymentLinks.ts` remain unchanged

---

## ✅ Final Checklist

Before considering migration complete:
- [ ] All course pages work
- [ ] Navigation works
- [ ] Payment links work
- [ ] Curriculum displays
- [ ] Build succeeds
- [ ] Production build works
- [ ] No errors
- [ ] Git committed
- [ ] Ready for deployment

---

**Migration Status:** [ ] Not Started | [ ] In Progress | [ ] Complete
