function createStudentManager(){
    let student = {}

    return{
        addStudent(name){
            if(students[name]){
                students[name] = {subjsct :{}}
            }
        }
        addSubject(name, subject, score){
            if(students[name]){
                students[name].subjects[subject] = score
            }
        }
        updateScore(name, subject, score){
            if(students[name] && students[name].subjects[subject] !== undefined){
                students[name].subjects[subject] = score
            }
        }
        getStudentsDetails(name){
            return students[name] || "Student not found"
        }
        getSortedStudents(sortBy){
            return Object.entries(students).map()
        }
    }
}


// Task manager

let taskManager = (function(){
    let tasks = {}
    let idCounter = 1;
    return{
        addTasks(title){
            tasks.push({id: idCounter++, title, completed  : false})
        }
        getAllTasks(){
            return JSON.stringify(tasks, null, 2)
        }
        markComplete(taskID){
            tasks = tasks.map(task => task.id === taskID ? {...task, completed : true})

        }
        removeTask(taskID){
            tasks = tasks.filter(task => task.id !== taskID)
        }
    }

})