class Subject {
	constructor() {
		this.observers = [];
	}
	// Add methods here
    addObserver(observer) {
        this.observers.push(observer)
    }
    removeObserver(observer) {
        this.observers = this.observers.filter((sub) => sub !== observer);
    }
    notifyOBservers(data){
        this.observers.forEach((sub) => sub(data))
    }
}

class Observer {
	update() {
		console.log('Observer updated!');
	}
}



