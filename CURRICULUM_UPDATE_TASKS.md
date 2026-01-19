# Curriculum Update Tasks

## Overview
This document tracks courses that are currently sharing the same curriculum and need to be updated with their own unique curricula.

## Courses Sharing 'web-development' Curriculum

The following **10 courses** are currently using the `'web-development'` curriculum but should have their own unique curricula:

---

### 1. Amazon Web Services (AWS) Course
- **Slug:** `amazon-web-services`
- **Current Curriculum:** `amazon-web-services` ✅
- **Status:** ✅ Complete
- **Task:** Create `amazonWebServices.ts` curriculum file
- **Notes:** Should focus on AWS cloud services, deployment, and management

---

### 2. Android App Development Course
- **Slug:** `android-app-development`
- **Current Curriculum:** `android-app-development` ✅
- **Status:** ✅ Complete
- **Task:** Create `androidAppDevelopment.ts` curriculum file
- **Notes:** Should cover Android development, UI/UX design, API integration, and app deployment

---

### 3. Construction Planning Course
- **Slug:** `construction-planning`
- **Current Curriculum:** `construction-planning` ✅
- **Status:** ✅ Complete
- **Task:** Create `constructionPlanning.ts` curriculum file
- **Notes:** Should cover CAD software, architectural design, project management, and BIM

---

### 4. Game Development Course
- **Slug:** `game-development`
- **Current Curriculum:** `game-development` ✅
- **Status:** ✅ Complete
- **Task:** Create `gameDevelopment.ts` curriculum file
- **Notes:** Should cover game engines, graphics programming, and game design principles

---

### 5. Genetic Engineering Course
- **Slug:** `genetic-engineering`
- **Current Curriculum:** `genetic-engineering` ✅
- **Status:** ✅ Complete
- **Task:** Create `geneticEngineering.ts` curriculum file
- **Notes:** Should cover healthcare informatics, bioinformatics, and genetic engineering applications

---

### 6. IC Engine Course
- **Slug:** `ic-engine`
- **Current Curriculum:** `ic-engine` ✅
- **Status:** ✅ Complete
- **Task:** Create `icEngine.ts` curriculum file
- **Notes:** Should cover automotive engineering, engine systems, and vehicle technologies

---

### 7. Medical Coding Course
- **Slug:** `medical-coding`
- **Current Curriculum:** `medical-coding` ✅
- **Status:** ✅ Complete
- **Task:** Create `medicalCoding.ts` curriculum file
- **Notes:** Should cover healthcare informatics and medical coding practices

---

### 8. Operation Management Course
- **Slug:** `operation-management`
- **Current Curriculum:** `operation-management` ✅
- **Status:** ✅ Complete
- **Task:** Create `operationManagement.ts` curriculum file
- **Notes:** Should cover strategic planning, team management, and organizational effectiveness

---

### 9. Robotics Course
- **Slug:** `robotics`
- **Current Curriculum:** `robotics` ✅
- **Status:** ✅ Complete
- **Task:** Create `robotics.ts` curriculum file
- **Notes:** Should cover robotics fundamentals, control systems, and automation technologies

---

### 10. Web Development Course (Base)
- **Slug:** `web-development`
- **Current Curriculum:** `web-development`
- **Status:** ✅ Complete (This is the base curriculum)
- **Task:** Keep as-is (this is the reference curriculum)
- **Notes:** This is the original curriculum that others are incorrectly referencing

---

## Implementation Checklist

### Step 1: Create Curriculum Files
- [x] Create `src/data/curriculum/amazonWebServices.ts`
- [x] Create `src/data/curriculum/androidAppDevelopment.ts`
- [x] Create `src/data/curriculum/constructionPlanning.ts`
- [x] Create `src/data/curriculum/gameDevelopment.ts`
- [x] Create `src/data/curriculum/geneticEngineering.ts`
- [x] Create `src/data/curriculum/icEngine.ts`
- [x] Create `src/data/curriculum/medicalCoding.ts`
- [x] Create `src/data/curriculum/operationManagement.ts`
- [x] Create `src/data/curriculum/robotics.ts`

### Step 2: Update Types
- [x] Add new course types to `src/data/curriculum/types.ts`:
  - `'amazon-web-services'` ✅
  - `'android-app-development'` ✅
  - `'construction-planning'` ✅
  - `'game-development'` ✅
  - `'genetic-engineering'` ✅
  - `'ic-engine'` ✅
  - `'medical-coding'` ✅
  - `'operation-management'` ✅
  - `'robotics'` ✅

### Step 3: Update Index File
- [x] Export new modules in `src/data/curriculum/index.ts` ✅
- [x] Add course configs for each new curriculum in `courseConfigs` object ✅ (AWS, Android App Development, Construction Planning, Game Development, Genetic Engineering, IC Engine, Robotics, Medical Coding, Operation Management)

### Step 4: Update Course Data
- [x] Update `courseType` field in `src/data/courses.ts` for each course:
  - `amazon-web-services`: Change from `'web-development'` to `'amazon-web-services'` ✅
  - `android-app-development`: Change from `'web-development'` to `'android-app-development'` ✅
  - `construction-planning`: Change from `'web-development'` to `'construction-planning'` ✅
  - `game-development`: Change from `'web-development'` to `'game-development'` ✅
  - `genetic-engineering`: Change from `'web-development'` to `'genetic-engineering'` ✅
  - `ic-engine`: Change from `'web-development'` to `'ic-engine'` ✅
  - `medical-coding`: Change from `'web-development'` to `'medical-coding'` ✅
  - `operation-management`: Change from `'web-development'` to `'operation-management'` ✅
  - `robotics`: Change from `'web-development'` to `'robotics'` ✅

### Step 5: Update CourseCurriculum Component
- [x] Add cases in `getModules()` function in `src/components/courses/CourseCurriculum.tsx` for each new course type ✅ (AWS, Android App Development, Construction Planning, Game Development, Genetic Engineering, IC Engine, Robotics, Medical Coding, Operation Management)

### Step 6: Testing
- [ ] Verify each course page displays the correct curriculum
- [ ] Test curriculum switching functionality
- [ ] Verify no TypeScript errors
- [ ] Check that all imports resolve correctly

---

## Progress Tracking

**Total Courses Needing Updates:** 9  
**Completed:** 9 (Amazon Web Services, Android App Development, Construction Planning, Game Development, Genetic Engineering, IC Engine, Robotics, Medical Coding, Operation Management)  
**In Progress:** 0  
**Not Started:** 0  

**Last Updated:** [Date will be updated as you progress]

---

## Notes

- Each curriculum file should follow the same structure as existing curriculum files
- Use the `Module` interface from `types.ts`
- Include appropriate topics, lectures, hours, and projects for each module
- Ensure course configs match the course titles and descriptions
- Consider the course category when designing curriculum modules

---

## Reference Files

- **Existing Curriculum Example:** `src/data/curriculum/webDevelopment.ts`
- **Types:** `src/data/curriculum/types.ts`
- **Index:** `src/data/curriculum/index.ts`
- **Course Data:** `src/data/courses.ts`
- **Component:** `src/components/courses/CourseCurriculum.tsx`
