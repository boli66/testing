
let rightAnswer = 'yes'
let answer
let sss
const sleep = async (milliseconds) => {
    await new Promise(resolve => {
                    return setTimeout(resolve, milliseconds);
                });
            };
async function quiz() {
    answer = prompt('Does the author like corn? (yes) or (no)');
    if (rightAnswer === answer) {
        console.log('good boy');
        document.getElementById('congrats1').innerHTML = ('Congratulations you can read!');
         await sleep(1000);
        document.getElementById('congrats1').classList.add('none');
          
        }
        else {
        console.log('you sick mudder fucker');
        }
        
    }
