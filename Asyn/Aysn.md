# Project 1 Get Random Color On BackGround

```javascript

 
      function randomColor() {
        let hex = "0123456789ABCDEF";
        let color = '#';

        for(let i = 0; i < 6; i++) {
          color += hex[Math.round(Math.random() * 16)];
        }
        return color;
      }
      
      document.querySelector('#start').addEventListener('click', startColorChanging);
      document.querySelector('#stop').addEventListener('click', stopChangingBgColor);

      let intervalId;

      function changeBgColor() {
        document.body.style.backgroundColor = randomColor();
        
      }
      function startColorChanging() {
        intervalId = setInterval(changeBgColor, 100);
      }
      
      function stopChangingBgColor() {
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