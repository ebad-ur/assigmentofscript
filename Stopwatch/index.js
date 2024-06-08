let timer;
        let isRunning = false;
        let milliseconds = 0;
        let seconds = 0;
        let minutes = 0;
        let hours = 0;

        function start() {
            if (!isRunning) {
                timer = setInterval(run, 10); // Update every 10 milliseconds (0.01 second) for milliseconds
                isRunning = true;
            }
        }

        function stop() {
            if (isRunning) {
                clearInterval(timer);
                isRunning = false;
            }
        }

        function run() {
            milliseconds++;
            if (milliseconds === 100) {
                milliseconds = 0;
                seconds++;
                if (seconds === 60) {
                    seconds = 0;
                    minutes++;
                    if (minutes === 60) {
                        minutes = 0;
                        hours++;
                    }
                }
            }

            const timeString = `${hours.toString().padStart(1, '0')}:${minutes.toString().padStart(1, '0')}:${seconds.toString().padStart(1, '0')}.${milliseconds.toString().padStart(1, '0')}`;
            document.getElementById('stopwatch').innerHTML = timeString;
        }

        function reset() {
            clearInterval(timer);
            isRunning = false;
            milliseconds = 0;
            seconds = 0;
            minutes = 0;
            hours = 0;
            document.getElementById('stopwatch').innerHTML = '0 :0 :0 :0';
        }