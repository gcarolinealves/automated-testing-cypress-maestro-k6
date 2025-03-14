/// <reference types="cypress"/>

describe("Search specific device", () => {
    let newObjectId;

    it("Search device", () => {
        cy.request({
            method: "GET",
            url: "https://api.restful-api.dev/objects/1"
        }).then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body.id).to.equal("1")
        })
    })

    it("Search inexistent device", () => {
        cy.request({
            method: "GET",
            url: "https://api.restful-api.dev/objects/inexistent",
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.equal(404)
            expect(response.body.error).to.equal("Oject with id=inexistent was not found.")
        })
    })

    it("Add device", () => {
        cy.request({
            method: "POST",
            url: "https://api.restful-api.dev/objects",
            body: {
                "name": "Moto G84",
                "data": {
                    "year": 2019,
                    "price": 1849.99,
                    "CPU model": "Intel Core i9",
                    "Hard disk size": "1 TB"
                }
            }
        }).then((response) => {
            newObjectId = response.body.id
            expect(response.status).to.equal(200)
            expect(response.body.name).to.equal("Moto G84")
        })
    })

    it("Update device", () => {
        cy.request({
            method: "PUT",
            url: `https://api.restful-api.dev/objects/${newObjectId}`,
            body: {
               "name": "Moto G84",
                "data": {
                    "year": 2019,
                    "price": 2050.99,
                    "CPU model": "Intel Core i9",
                    "Hard disk size": "1 TB"
                }
            }
        }).then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body.data.price).to.equal(2050.99)
        })
    })

    it("Delete device", () => {
        cy.request({
            method: "DELETE",
            url: `https://api.restful-api.dev/objects/${newObjectId}`,
        }).then((response) => {
            expect(response.status).to.equal(200)
        })
    })
})