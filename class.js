// Syntactic sugar

// Parent class(prototype inheritance)
class TeamMember{
    name;
    location;

    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    provideFeedback(){
        console.log(`${this.name} thank you for your feedback`);
    }
}

// Child Class
class Instructor extends TeamMember{
    designation = 'Web course instructor';
    team = 'web team';
    constructor(name, location){
        super(name,location);
    }
    startSupportSession(time){
        console.log(`Start the support session at ${time}`);
    }
    createQuiz(module){
        console.log(`Please create quiz for module ${module}`);
    }
    

}


// Developer : Child Class
class Developer extends TeamMember{
    designation = 'Web developer';
    team = 'web developer team';
    technology;
    constructor(name, location,technology){
        super(name, location);
        this.technology = technology;
    }
    developFeature(feature){
        console.log(`Please develop the ${feature}`);
    }
    release(version){
        console.log(`Please release the version ${version}`);
    }

}

// Job Placement Team : Child Class
class JobPlacement extends TeamMember{
    designation = 'Job Placement Commandos';
    team = 'Job Placement team';
    region;
    constructor(name, location, region){
        super(name, location);
        this.region = region;
    }
    ProvideResume(time){
        console.log(`Start the support session at ${time}`);
    }
    preparedStudent(module){
        console.log(`Please create quiz for module ${module}`);
    }

}

const alia = new Developer('Alia Bhatt', 'Dhaka', 'React');
console.log(alia);
alia.provideFeedback();

const bipasha = new JobPlacement('Bipasha','Kolkata', 'India');
console.log(bipasha);
bipasha.provideFeedback();