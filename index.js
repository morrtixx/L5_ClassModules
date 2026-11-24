import { LabLesson } from './labLesson.js';
const lessons = [
    new LabLesson('ЛР 4: Асинхронный JS', 90, true, true),
    new LabLesson('ЛР 5: Классы и модули', 45, false, false)
];
lessons.forEach(lesson => lesson.show());