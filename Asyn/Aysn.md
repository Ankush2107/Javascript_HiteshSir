# Project 1 Get Random Color On BackGround

```javascript

 let intervalId;
    
        function getRandomColor() {
          // Generate a random color in hexadecimal format (e.g., #RRGGBB)
          const letters = "0123456789ABCDEF";
          let color = "#";
          for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
          }
          return color;
        }

        document.getElementById("startButton").addEventListener("click", startColorChanging);
        document.getElementById("stopButton").addEventListener("click", stopColorChanging);
    
        function changeBackgroundColor() {
          const element = document.getElementById("random-color-box");
          const randomColor = getRandomColor();
          element.style.backgroundColor = randomColor;
        }
    
        function startColorChanging() {
          // Change the background color every 3 seconds
          intervalId = setInterval(changeBackgroundColor, 3000);
        }
    
        function stopColorChanging() {
          // Clear the interval to stop changing the background color
          clearInterval(intervalId);
        }

```

# Project 2 KeyBoard Project

```javascript

 const insert = document.querySelector('#insert');

        window.addEventListener('keydown', (e) => {
            insert.innerHTML = `
            <div class="color"> 
                <table>
                <tr>
                    <th>key</th>
                    <th>keyCode</th>
                    <th>code</th>
                </tr>
                <tr>
                    <td>${e.key === " " ? "Space" : e.key}</td>
                    <td>${e.keyCode}</td>
                    <td>${e.code}</td>
                </tr>
                </table>
            </div>
            `;
        });

```