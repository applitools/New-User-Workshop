describe('Functionally Test Login', () => {
    beforeEach(() => {
        cy.eyesOpen({
            appName: 'ACME Bank',
            testName: 'Bank - Dynamic Content',
			browser: [
                {width: 1400, height: 800, name: 'chrome'},
            ]
        })
    })

    it('should log into a bank account', () => {
        cy.visit('https://sandbox.applitools.com/bank/dashboard?layoutAlgo=true');

		// cy.get('#__next > div.all-wrapper.solid-bg-all > div.dashboard_dashboardContainer__XlSs_ > div.dashboard_dashboardContent__BUrjL > div.dashboardOverview_dbOverviewContainer__osDKR > div.dashboardOverview_accountBalancesContainer__RfW0S > div > div:nth-child(2)').invoke('remove');

        cy.eyesCheckWindow({ 
			tag: "Dynamic Dashboard",
			// layout: [
            //     {selector: '.dashboardOverview_accountBalances__3TUPB'},
            //     {selector: '.dashboardTable_dbTable___R5Du'}
            // ]
		});
    })

    afterEach(() => {
        cy.eyesClose()
    })
})