import {Lesson} from './lesson.js';
export class LabLesson extends Lesson{
    _isDefended
    constructor (title, duration, isCompleted, isDefended){
        super(title, duration, isCompleted);
        this._isDefended = isDefended;
    }
    get isDefended(){
        return this._isDefended;
    }
    set isDefended(value){
        this._isDefended=value;
    }
    show(){
        super.show();
        console.log(`Защищена: ${this._isDefended}`);
    }
    static clone(labLesson) {
        return new LabLesson(
            labLesson.title,
            labLesson.duration,
            labLesson.isCompleted,
            labLesson.isDefended
        );
    }
}