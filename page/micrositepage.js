class Microsite {
    constructor(page) {
        this.page = page;
        this.confirmbtn = this.page.locator("#rcc-confirm-button");
        this.scriptcategory = this.page.locator("(//img[@src='https://i.ashidiamonds.com/images/apj/Categorylanding/Necklaces/Script_Name_Necklace_Landing_Style.jpg'])[1]");
        this.attributekt = this.page.locator("//li[contains(text(),'10 KT')]");
        this.dropdown = this.page.locator('#nnQuality');
        this.color = this.page.locator("//li[@value='Yellow Gold']");
        this.size = this.page.locator("//input[contains(@value,'Small')]");
        this.namefield = this.page.locator("//input[@id='CustomNecklaceField']");

    }

    async clickConfirmButton() {
        await this.confirmbtn.click();
    }

    async scriptcategorybtn() {

        await this.scriptcategory.click();
    }
    async attributektbtn() {
        await this.attributekt.waitFor();
        await this.attributekt.click();
    }
    async dropdownele() {

        await this.dropdown.click();
        await this.dropdown.selectOption({ value: 'Standard' });
    }
    async colorele() {

        await this.color.waitFor();
        await this.color.click();
    }

    async sizeele() {

        await this.size.waitFor();
        await this.size.click();
    }


    async namefieldele(name) {

        await this.namefield.click();
        await this.namefield.fill(name);

    }


}
module.exports = Microsite;  // Correct CommonJS export

