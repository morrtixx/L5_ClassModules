export class Lesson{
    _title
    _duration
    _isCompleted
    constructor(title, duration, isCompleted){
        this._title=title;
        this._duration=duration;
        this._isCompleted=isCompleted;
    }
    get title(){
        return this._title;
    }
    set title(value){
        this._title=value;
    }
    get duration(){
        return this._duration;
    }
    set duration(value){
        this._duration=value;
    }
    get isCompleted(){
        return this._isCompleted;
    }
    set isCompleted(value){
        this._isCompleted=value;
    }
    #markAsCompleted(){
        this._isCompleted=true;
    }
    show(){
        console.log(`Урок: ${this._title}, Длительность: ${this._duration} мин, Пройден: ${this._isCompleted}`);
    }
    copy() {
        return this;
    }
    delete() {
        Object.keys(this).forEach(key => delete this[key]);
    }
    static clone(lesson) {
        return new Lesson(lesson.title, lesson.duration, lesson.isCompleted);
    }
}