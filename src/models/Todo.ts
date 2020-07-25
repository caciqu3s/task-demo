function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

export class Todo {
    id: string = uuidv4();
    text!: string;
    done: boolean = false;
    description?: string;

    constructor(text: string, description?: string) {
        this.text = text;
        this.description = description; 
    }
}