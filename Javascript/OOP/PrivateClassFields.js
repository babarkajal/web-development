/**
 * *Private class fields are created using # prefix
 * 
 */


class Company {
        name;
        #revenue;

        constructor(name, revenue){
                this.name = name;
                this.#revenue = revenue;
                // this.#management ="It's a secret";      //SyntaxError: Private field '#management' must be declared in an enclosing class   
        }

        showInfo() {
                console.log('Company name',this.name, ' And revenue is', this.#revenue);
                this.#addRevenue()
        }


        #addRevenue() {
                console.log("Update Revenue")
                this.#revenue = 20000000;
        }
}

const apple = new Company('Apple',4000000);
console.log(apple);
/**
 * !SyntaxError: Private field '#revenue' must be declared in an enclosing class
 console.log(apple.#revenue);
 */
console.log(apple.revenue);                     //undefined

apple.showInfo()