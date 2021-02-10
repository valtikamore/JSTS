test('should take old men older then 90', () => {
    const ages = [18, 20, 22, 1, 100, 14];



    const oldAges = ages.filter(age => age > 90)
    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)
})
test('should take courses cheppr then 100$', () => {
    const courses = [
        {title:'css',price:100},
        {title:'js',price:222},
        {title:'react',price:333},
    ];


    const cheepCourse = courses.filter(price => price.price > 160)
    expect(cheepCourse.length).toBe(2)
    expect(cheepCourse[0].price).toBe(222)
})
test('get only completed tasks', ()=> {
    type tasksType ={
        id:number
        title:string
        isDone:boolean
    }
    const tasks:Array<tasksType> = [
        {id:1,title:'Bread',isDone:false},
        {id:2,title:'Milk',isDone:true},
        {id:3,title:'Bread',isDone:false},
        {id:4,title:'Bread',isDone:true},
        {id:5,title:'Bread',isDone:false},
    ]
    const completedTasks = tasks.filter(completedTask => completedTask.isDone)
    expect(completedTasks.length).toBe(2)
    expect(completedTasks[0].title).toBe('Milk')

    const uncompletedTasks = tasks.filter(uncompletedTask => !uncompletedTask.isDone )
    expect(uncompletedTasks.length).toBe(3)
    expect(uncompletedTasks[0].title).toBe('Bread')
})
