export class loginPageActions{

    username(){
        cy.get('#username').type('student');
        return
    }

    password(){
        cy.get('#password').type('Password123');
        return
    }
    
    loginButton(){
        cy.xpath('//button[@id="submit"]').click();
        return
    }
}
