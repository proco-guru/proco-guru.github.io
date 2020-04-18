
# Make random color matrix board with Behavior subject and CSS3 — Angular 8

This article covers the basics of Behavior subject and makes a satisfying random color board using CSS.

![Photo by [Patrick Fore](https://unsplash.com/@patrickian4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/search/photos/color-board?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)](https://cdn-images-1.medium.com/max/9654/1*wj-N5KoVl4pI5lfTM5iACw.jpeg)*Photo by [Patrick Fore](https://unsplash.com/@patrickian4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/search/photos/color-board?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)*
[**angular - CodeSandbox**
*The online code editor tailored for web applications*codesandbox.io](https://codesandbox.io/s/angular-zbkib?codemirror=1&fontsize=14)

Behavior subjects are meant to broadcast the latest **state of data **irrespective of the time of subscription. For example

assume *v1,v2,v3,v4* are emitted values and *s1,s2,s3* are different subscribers on behavior subject *bs1*

Value timeline — — — — v1 — — — -v2 — — — — — v3 — — — —

subscription — -s1 — — — —s2 — — — — -s3 — — — — — —

got value — — — — — — -S1(v1)-s2(v1) — s1,s2,s3(v2) — s1,s2,s3(v3)

Okay, now we need a **Matrix **which will be used to render the board on the screen.

    board = [[{ color: "blue" }, { color: "orange" }]];

we will have color property only to set the background color.

now we need a behavior subject with number array which emits the random row and col.

    private bs: BehaviorSubject<number[]> = new BehaviorSubject([0, 0]);

Let’s add a timer to publish new row and column

    setInterval(() => {

        this.bs.next([

             Math.round(Math.random() * 10),

             Math.round(Math.random() * 10)

        ]);

    }, 100);

Take subscription for the bs.

    this.bs.subscribe(x => {

        this.populateBoard(x);

    });

Now add logic to fill your matrix

    populateBoard(rowCol: number[]) {

      if (this.board.length <= rowCol[0] + 1) {

        for (let index = 0; index <= rowCol[0] + 1; index++) {

          if (!this.board[index]) {

            this.board[index] = [{ color: null }];

          }

        }

      }

      this.board[rowCol[0]][rowCol[1]] = { color: this.getColor() };

    }

need a random color every time, let's get it with ES6 function

    getColor() {

      return "#" + Math.floor(Math.random() * 16777215).toString(16);

    }

Let’s add HTML in a **app.component.html**

    <div class="row" *ngFor="let r of board">

        <div *ngFor="let c of r "  [style.background]="c?.color" class="square">

        </div>

    </div>

Some styling in app.component.css

    .square {

      height: 15px;

      width: 15px;

      background: whitesmoke;

      display: inline-block;

      margin: 1px;

    }

    .row {

      margin: 1px;

    }

Let’s run it! Have fun!
