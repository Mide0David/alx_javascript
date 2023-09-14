function createClassRoom(numberOfStudents){
    function studentSeat(seat){
        return function() {
            return seat;
        }
    }
    const students = [];
    for (let i = 0; i < numberOfStudents; i++){
        const seatNum = i + 1;
        students.push(studentSeat(seatNum));
    }
    return students;
}

const classRoom = createClassRoom(10);
