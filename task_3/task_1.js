const ref = {
    days:document.querySelector('[data-value="days"]'),
    hours:document.querySelector('[data-value="hours"]'),
    minuts:document.querySelector('[data-value="mins"]'),
    seconds:document.querySelector('[data-value="secs"]'),
};

class CountdownTimer {
 constructor(obj) {
     this.selector = obj.selector;
     this.targetDate = obj.targetDate;
     this.delta = 0;
}
 start(){
    const startTime = this.targetDate;
    this.timerId = setInterval(() => {
        const carrentDate  = Date.now();
        this.delta = startTime - carrentDate;
        this.updateClockFace(this.delta);
    }, 1000);
 }
 updateClockFace(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    ref.days.textContent = days;
    ref.hours.textContent = hours;
    ref.minuts.textContent = mins;
    ref.seconds.textContent = secs;
 }
//  stop() {
//     const stopTimer = 0;
//  }
}
console.log(ref.days)
console.log(ref.hours)
console.log(ref.minuts)
console.log(ref.seconds)


 const countdown = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Oct 24, 2020'),
  });

  countdown.start();

//   ref.days.textContent = days;

// /*
//  * Дні, що залишилися: ділимо значення UTC на 1000 * 60 * 60 * 24, кількість
//  * мілісекунд в один день (мілісекунди * секунди * хвилини * години)
//  */
// const days = Math.floor(time / (1000 * 60 * 60 * 24));

// /*
//  * Решта годин: отримуємо залишок від попереднього розрахунку за допомогою оператора
//  * залишку% і ділимо його на кількість мілісекунд в одній годині
//  * (1000 * 60 * 60 = мілісекунди * хвилини * секунди)
//  */
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

// /*
//  * Решта хвилин: отримуємо хвилини, що залишилися і ділимо їх на кількість
//  * мілісекунд в одній хвилині (1000 * 60 = мілісекунди * секунди)
//  */
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

// /*
//  * Решта секунд: отримуємо секунди, які залишилися і ділимо їх на кількість
//  * миллисекунд в одной секунде (1000)
//  */
// const secs = Math.floor((time % (1000 * 60)) / 1000);