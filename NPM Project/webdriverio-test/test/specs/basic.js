

describe('Verifying on org management page', () => {
    it.only('should have the right title page', () => {
        browser.url('https://portal-test.kobiton.com/login')
        const title = browser.getTitle()
        browser.pause(3000)
        expect(browser).toHaveTitle('Kobiton');
    })

    it.only('should login in portal-test successfully', () => {
        const emailTextBox = $('[name="emailOrUsername"]')
        emailTextBox.click()
        browser.keys('khanhdo')
        browser.pause(3000)

        const passwordTextBox = $('[name="password"]')
        passwordTextBox.click()
        browser.keys('Kobiton@2020')
        browser.pause(3000)
        browser.keys("\uE007");
        browser.pause(8000)
    })

    it.only('should click to org management navigave to group function', () => {
        browser.pause(8000)
        const orgMana = $('//a[contains(@href, "/organization/groups")]')
        browser.pause(5000)
        orgMana.click()
        browser.pause(8000)
    })

    it('should display Group, Description, User, Device, + ADD in group function', () => {
        const groupText = $('//p[contains(text(), "Group")]')
        expect(groupText).toBeVisible()
        browser.pause(3000)

        const descriptionText = $('//p[contains(text(), "Description")]')
        expect(descriptionText).toBeVisible()
        browser.pause(3000)

        const userText = $('//p[contains(text(), "User")]')
        expect(userText).toBeVisible()
        browser.pause(3000)

        const deviceText = $('//p[contains(text(), "Device")]')
        expect(deviceText).toBeVisible()
        browser.pause(3000)

        const addButtonText = $('//button[contains(text(), "+ ADD")]')
        expect(addButtonText).toBeVisible()
        browser.pause(3000)
    })

    it('should display Edit Organization popup when clicking edit org edit icon', () => {
        const orgEditIcon = $('//span[contains(@class, "editIcon sc-krvtoX editIcon fMwaVV sc-lkqHmb editIcon sc-krvtoX editIcon fMwaVV aGZDw")]')
        orgEditIcon.click()
        browser.pause(5000)
        const editOrganizationText = $('//h2[contains(text(), "Edit Organization")]')
        expect(editOrganizationText).toBeVisible()
        browser.pause(3000)
    })

    it('should verify edit successful Organization Name with = 5 characters ', () => {
        const orgEditIcon = $('//span[contains(@class, "editIcon sc-krvtoX editIcon fMwaVV sc-lkqHmb editIcon sc-krvtoX editIcon fMwaVV aGZDw")]')
        orgEditIcon.click()
        browser.pause(5000)

        const organizationNameTextBox = $('//input[contains(@placeholder, "Enter Organization name here")]')
        organizationNameTextBox.clearValue()
        organizationNameTextBox.click()
        browser.keys('12345')
        browser.pause(3000)

        const updateButton = $('//button[contains(@class, "sc-jRuhRL ciivDx")]')
        expect(updateButton).toBeVisible()
        browser.pause(3000)
    })

    it('should verify edit unsuccessful Organization Name with < 5 characters', () => {
        const orgEditIcon = $('//span[contains(@class, "editIcon sc-krvtoX editIcon fMwaVV sc-lkqHmb editIcon sc-krvtoX editIcon fMwaVV aGZDw")]')
        orgEditIcon.click()
        browser.pause(5000)

        const organizationNameTextBox = $('//input[contains(@placeholder, "Enter Organization name here")]')
        organizationNameTextBox.clearValue()
        organizationNameTextBox.click()
        browser.keys('1234')
        browser.pause(3000)

        const compulsoryMessage = $('//p[contains(text(), "Name must between 5 and 80 characters & can contain alphabet, alphanumeric, space, . + - _")]')
        expect(compulsoryMessage).toBeVisible()
        browser.pause(3000)
    })

    it('should verify edit successful Organization Name with > 5 characters', () => {
        const orgEditIcon = $('//span[contains(@class, "editIcon sc-krvtoX editIcon fMwaVV sc-lkqHmb editIcon sc-krvtoX editIcon fMwaVV aGZDw")]')
        orgEditIcon.click()
        browser.pause(5000)

        const organizationNameTextBox = $('//input[contains(@placeholder, "Enter Organization name here")]')
        organizationNameTextBox.clearValue()
        organizationNameTextBox.click()
        browser.keys('123456')
        browser.pause(3000)

        const updateButton = $('//button[contains(@class, "sc-jRuhRL ciivDx")]')
        expect(updateButton).toBeVisible()
        browser.pause(3000)
    })

    it('should verify edit unsuccessful Organization Name with > 80 characters', () => {
        const orgEditIcon = $('//span[contains(@class, "editIcon sc-krvtoX editIcon fMwaVV sc-lkqHmb editIcon sc-krvtoX editIcon fMwaVV aGZDw")]')
        orgEditIcon.click()
        browser.pause(5000)

        const organizationNameTextBox = $('//input[contains(@placeholder, "Enter Organization name here")]')
        organizationNameTextBox.click()
        browser.keys('123456789hdfvsjahvjsbvajhvsabdhfsjfhvashvfkshdfjashdfgkdhfsjdhbcjhsdvgfgkuhagvhsdbcjsvbadkfhvabkdhvbsdcvbdkavjhbdsvbsdjhvsadvhsaj')
        browser.pause(3000)

        const organizationDescriptionTextBox = $('//input[contains(@placeholder, "Enter Organization description here")]')
        organizationDescriptionTextBox.click()
        // browser.keys('')

        const compulsoryMessage = $('//p[contains(text(), "Name must between 5 and 80 characters & can contain alphabet, alphanumeric, space, . + - _")]')
        expect(compulsoryMessage).toBeVisible()
        browser.pause(3000)
    })

    it('should verify edit unsuccessful Organization Name with the blank field', () => {
        const orgEditIcon = $('//span[contains(@class, "editIcon sc-krvtoX editIcon fMwaVV sc-lkqHmb editIcon sc-krvtoX editIcon fMwaVV aGZDw")]')
        orgEditIcon.click()
        browser.pause(5000)

        const organizationNameTextBox = $('//input[contains(@placeholder, "Enter Organization name here")]')
        organizationNameTextBox.clearValue()
        browser.pause(30000)
        organizationNameTextBox.getValue()
        console.log('value ======', organizationNameTextBox.getValue(), '======')
        // organizationNameTextBox.click()
        browser.pause(3000)

        const orgDescriptionTextBox = $('//input[contains(@placeholder, "Enter Organization description here")]')
        orgDescriptionTextBox.click()
        browser.pause(3000)

        const compulsoryMessage = $('//p[contains(text(), "Name must between 5 and 80 characters & can contain alphabet, alphanumeric, space, . + - _")]')
        expect(compulsoryMessage).toBeVisible()
        browser.pause(3000)
    })

    it('should verify that not be able to edit organization with description cannot exceed 150 characters', () => {
        const orgEditIcon = $('//span[contains(@class, "editIcon sc-krvtoX editIcon fMwaVV sc-lkqHmb editIcon sc-krvtoX editIcon fMwaVV aGZDw")]')
        orgEditIcon.click()
        browser.pause(5000)

        const organizationNameTextBox = $('//input[contains(@placeholder, "Enter Organization name here")]')
        organizationNameTextBox.click()
        browser.keys('1234556')
        browser.pause(30000)

        const organizationDescriptionTextBox = $('//input[contains(@placeholder, "Enter Organization description here")]')
        organizationDescriptionTextBox.click()
        browser.keys('123123123dhgfsjvhjbh shfu sdhj hdshf ksh kjas kjv ssdjk jsdh fhfksdhf kjs fhsd  h sfhsfsavvgh vfgfjsgfkvbncxvnmzvbzbvnvbkdfgaerytdfbdkfhkasdgfiuyetuyertyehafhjsfgjsgdjgdfjghf')
        browser.pause(3000)

        const orgDescriptionMessage = $('//p[contains(text(), "Description cannot exceed 150 characters.")]')
        expect(orgDescriptionMessage).toBeVisible()
        browser.pause(3000)
        
    })

    it('should verify that be able to update Edit Organization with valid Organization Name and Organization Description', () => {
        const organizationNameTextBox = $('//input[contains(@placeholder, "Enter Organization name here")]')
        organizationNameTextBox.click()
        browser.keys('')
        browser.pause(3000)

        const organizationDescriptionTextBox = $('//input[contains(@placeholder, "Enter Organization description here")]')
        organizationDescriptionTextBox.clearValue()
        organizationDescriptionTextBox.click()
        browser.keys('Kobiton Test')
        browser.pause(3000)

        const updateButton = $('//button[contains(@class, "sc-jRuhRL ciivDx")]')
        updateButton.click()
        browser.pause(3000)
    })

    it('should display the tooltip when hovering to org Edit icon', () => {
        const orgEditIcon = $('//span[contains(@class, "editIcon sc-krvtoX editIcon fMwaVV sc-lkqHmb editIcon sc-krvtoX editIcon fMwaVV aGZDw")]')
        orgEditIcon.moveTo(1,1)
        browser.pause(6000)

        const editTextHover = $('//div[contains(text(), "Edit")]')
        expect(editTextHover).toBeVisible()
        browser.pause(3000)
    })

    it('should display add group popup when clicking + ADD button', () => {
        const plusAddButton = $('//button[contains(text(), "+ ADD")]')
        plusAddButton.click()
        browser.pause(5000)
        const addNewGroupText = $('//h2[contains(text(), "Add New Group")]')
        expect(addNewGroupText).toBeVisible()
        browser.pause(3000)
    })
    
    it('should verify add group test successfully with valid group name and group description', () => {
        const plusAddButton = $('//button[contains(text(), "+ ADD")]')
        plusAddButton.click()
        browser.pause(3000)

        const groupNameTextBox = $('//input[contains(@placeholder, "Enter Group name here")]')
        groupNameTextBox.click()
        browser.keys('Nobita')
        browser.pause(3000)

        const groupDescriptionTextBox = $('//input[contains(@placeholder, "Enter Group description here")]')
        groupDescriptionTextBox.click()
        browser.keys('Nobita love Shizuka')
        browser.pause(3000)
        const addButton = $('//button[contains(@class, "marketing-add-group-confirm-button sc-lnmtFM dKEcwx")]')
        addButton.click()
        browser.pause(3000)

        const addSuccessfulMessage = $('//div[contains(text(), "Group has been created successfully.")]')
        expect(addSuccessfulMessage).toBeVisible()
        browser.pause(3000)
    })

    it('should verify that not be able to add new group with description cannot exceed 150 characters', () => {
        const plusAddButton = $('//button[contains(text(), "+ ADD")]')
        plusAddButton.click()
        browser.pause(3000)

        const groupNameTextBox = $('//input[contains(@placeholder, "Enter Group name here")]')
        groupNameTextBox.click()
        browser.keys('Nobita')
        browser.pause(3000)

        const groupDescriptionTextBox = $('//input[contains(@placeholder, "Enter Group description here")]')
        groupDescriptionTextBox.click()
        browser.keys('123123123dhgfsjvhjbh shfu sdhj hdshf ksh kjas kjv ssdjk jsdh fhfksdhf kjs fhsd  h sfhsfsavvgh vfgfjsgfkvbncxvnmzvbzbvnvbkdfgaerytdfbdkfhkasdgfiuyetuyertyehafhjsfgjsgdjgdfjghf')
        browser.pause(3000)

        const groupDescriptionMessage = $('//p[contains(text(), "Description cannot exceed 150 characters.")]')
        expect(groupDescriptionMessage).toBeVisible()
        browser.pause(3000)
        
    })

    it('should verify add group successful Group Name with = 5 characters', () => {
        const plusAddButton = $('//button[contains(text(), "+ ADD")]')
        plusAddButton.click()
        browser.pause(3000)

        const groupNameTextBox = $('//input[contains(@placeholder, "Enter Group name here")]')
        groupNameTextBox.click()
        browser.keys('Nobita')
        browser.pause(3000)

        const groupDescriptionTextBox = $('//input[contains(@placeholder, "Enter Group description here")]')
        groupDescriptionTextBox.click()
        browser.pause(3000)

        const addButton = $('//button[contains(@class, "marketing-add-group-confirm-button sc-lnmtFM dKEcwx")]')
        expect(addButton).toBeVisible()
        browser.pause(3000)
    })

    it('should verify add group unsuccessful Group Name with < 5 characters', () => {
        const plusAddButton = $('//button[contains(text(), "+ ADD")]')
        plusAddButton.click()
        browser.pause(3000)

        const groupNameTextBox = $('//input[contains(@placeholder, "Enter Group name here")]')
        groupNameTextBox.click()
        browser.keys('Nobi')
        browser.pause(3000)

        const groupDescriptionTextBox = $('//input[contains(@placeholder, "Enter Group description here")]')
        groupDescriptionTextBox.click()
        browser.keys('Nobit')
        browser.pause(3000)

        const groupNameMessage = $('//p[contains(@class, "sc-eerKOB dcbrFW")]')
        expect(groupNameMessage).toBeVisible()
        browser.pause(3000)
    })

    it('should verify add group unsuccessful Group Name with > 5 characters', () => {
        const plusAddButton = $('//button[contains(text(), "+ ADD")]')
        plusAddButton.click()
        browser.pause(3000)

        const groupNameTextBox = $('//input[contains(@placeholder, "Enter Group name here")]')
        groupNameTextBox.click()
        browser.keys('Nobita')
        browser.pause(3000)

        const groupDescriptionTextBox = $('//input[contains(@placeholder, "Enter Group description here")]')
        groupDescriptionTextBox.click()
        browser.pause(3000)

        const addButton = $('//button[contains(@class, "marketing-add-group-confirm-button sc-lnmtFM dKEcwx")]')
        expect(addButton).toBeVisible()
        browser.pause(3000)
    })

    it('should verify add group unsuccessful Group Name with > 80 characters ', () => {
        const plusAddButton = $('//button[contains(text(), "+ ADD")]')
        plusAddButton.click()
        browser.pause(3000)

        const groupNameTextBox = $('//input[contains(@placeholder, "Enter Group name here")]')
        groupNameTextBox.click()
        browser.keys('hfaghfagfasfgsafgfgjfgasfasfggjkagjasgajfgajfgsfguyrgefhvhdbvxnvxnvhfvffgffgjhdvcvnvhdvxvjhsdgfsfgsfhdvxbvhdgvdgfsgfhdvhdjvshdjvd')
        browser.pause(3000)

        const groupDescriptionTextBox = $('//input[contains(@placeholder, "Enter Group description here")]')
        groupDescriptionTextBox.click()
        browser.pause(3000)

        const compulsoryMessage = $('//p[contains(text(), "Name must between 5 and 80 characters & can contain alphabet, alphanumeric, space, . + - _")]')
        expect(compulsoryMessage).toBeVisible()
        browser.pause(3000)
    })

    it('should display the group menu when clicking the row of table', () => {
        const groupMenu = $('//div[contains(text(), "1 Test")]//following-sibling::div[2]')
        groupMenu.click()
        browser.pause(6000)
    })

    it('should display the Assign Members popup (Add Users to 1 Test) when clicking Assign Members', () => {
        const groupMenu = $('//div[contains(text(), "1 Test")]//following-sibling::div[2]')
        groupMenu.click()
        browser.pause(6000) 

        const assignMembersTextBox = $('//div[contains(text(), "1 Test")]//following-sibling::div[2]//ul/li/p/div/span[contains(text(), "Assign Members")]')
        expect(assignMembersTextBox).toBeVisible()
        browser.pause(3000)
    })

    it('should display User and Email in  Assign Members popup when clicking to Assign Members feature', () => {
        const groupMenu = $('//div[contains(text(), "1 Test")]//following-sibling::div[2]')
        groupMenu.click()
        browser.pause(6000) 

        const assignMembersTextBox = $('//div[contains(text(), "1 Test")]//following-sibling::div[2]//ul/li/p/div/span[contains(text(), "Assign Members")]')
        assignMembersTextBox.click()
        browser.pause(3000)

        const userLabel = $('//p[contains(text(), "Select to add group members")]//following-sibling::div//p[contains(text(), "User")]')
        expect(userLabel).toBeVisible()
        const EmailLabel = $('//p[contains(text(), "Select to add group members")]//following-sibling::div//p[contains(text(), "Email")]')
        expect(EmailLabel).toBeVisible()
        browser.pause(3000)

    })

    it('should assign members successfully when clicking to update', () => {
        const groupMenu = $('//div[contains(text(), "1 Test")]//following-sibling::div[2]')
        groupMenu.click()
        browser.pause(6000) 

        const assignMembersTextBox = $('//div[contains(text(), "1 Test")]//following-sibling::div[2]//ul/li/p/div/span[contains(text(), "Assign Members")]')
        assignMembersTextBox.click()
        browser.pause(3000)

        const tickUser = $('//p[contains(text(), "cuongktran+1@kobiton.com")]//ancestor::div[1]')
        tickUser.click()
        browser.pause(3000)

        const updateButton = $('//button[contains(text(), "UPDATE")]')
        updateButton.click()
        browser.pause(3000)

        const updateSuccessfulMessage = $('//div[contains(text(), "Group members have been updated successfully.")]')
        expect(updateSuccessfulMessage).toBeVisible()
        browser.pause(3000)
    })

    it('should display the Edit popup when clicking Edit', () => {
        const groupMenu = $('//div[contains(text(), "1 Test")]//following-sibling::div[2]')
        groupMenu.click()
        browser.pause(6000) 

        const assignMembersTextBox = $('//div[contains(text(), "1 Test")]//following-sibling::div[2]//ul/li/p/div/span[contains(text(), "Edit")]')
        assignMembersTextBox.click()
        browser.pause(3000)

        const editGroupTitle = $('//h2[contains(text(), "Edit Group")]')
        expect(editGroupTitle).toBeVisible()
        browser.pause(3000)
    })

    it('verify that not be able to edit group with description cannot exceed 150 characters', () => {
        const groupMenu = $('//div[contains(text(), "1 Test")]//following-sibling::div[2]')
        groupMenu.click()
        browser.pause(6000) 

        const assignMembersTextBox = $('//div[contains(text(), "1 Test")]//following-sibling::div[2]//ul/li/p/div/span[contains(text(), "Edit")]')
        assignMembersTextBox.click()
        browser.pause(3000)

        const groupNameTextBox = $('//input[contains(@placeholder, "Enter Group name here")]')
        groupNameTextBox.click()
        browser.keys('Nobita')
        browser.pause(3000)

        const groupDescriptionTextBox = $('//input[contains(@placeholder, "Enter Group description here")]')
        groupDescriptionTextBox.click()
        browser.keys('123123123dhgfsjvhjbh shfu sdhj hdshf ksh kjas kjv ssdjk jsdh fhfksdhf kjs fhsd  h sfhsfsavvgh vfgfjsgfkvbncxvnmzvbzbvnvbkdfgaerytdfbdkfhkasdgfiuyetuyertyehafhjsfgjsgdjgdfjghf')
        browser.pause(3000)

        const groupDescriptionMessage = $('//p[contains(text(), "Description cannot exceed 150 characters.")]')
        expect(groupDescriptionMessage).toBeVisible()
        browser.pause(3000)
    })

    it('should verify edit group successful Group Name with = 5 characters', () => {
        browser.pause(3000)
        const groupMenu = $('//div[contains(text(), "Nobita")]//following-sibling::div[2]')
        groupMenu.scrollIntoView()
        groupMenu.click()
        browser.pause(6000) 

        const assignMembersTextBox = $('//div[contains(text(), "Nobita")]//following-sibling::div[2]//ul/li/p/div/span[contains(text(), "Edit")]')
        assignMembersTextBox.click()
        browser.pause(3000)

        const groupNameTextBox = $('//input[contains(@placeholder, "Enter Group name here")]')
        groupNameTextBox.click()
        browser.keys('Nobita')
        browser.pause(3000)

        const groupDescriptionTextBox = $('//input[contains(@placeholder, "Enter Group description here")]')
        groupDescriptionTextBox.click()
        browser.pause(3000)

        const updateButton = $('//button[contains(text(), "UPDATE")]')
        expect(updateButton).toBeVisible()
        browser.pause(3000)
    })

    it('should verify edit group successful Group Name with > 5 characters', () => {
        browser.pause(3000)
        const groupMenu = $('//div[contains(text(), "Nobita")]//following-sibling::div[2]')
        groupMenu.scrollIntoView()
        groupMenu.click()
        browser.pause(6000) 

        const assignMembersTextBox = $('//div[contains(text(), "Nobita")]//following-sibling::div[2]//ul/li/p/div/span[contains(text(), "Edit")]')
        assignMembersTextBox.click()
        browser.pause(3000)

        const groupNameTextBox = $('//input[contains(@placeholder, "Enter Group name here")]')
        groupNameTextBox.click()
        browser.keys('Nobitahaha')
        browser.pause(3000)

        const groupDescriptionTextBox = $('//input[contains(@placeholder, "Enter Group description here")]')
        groupDescriptionTextBox.click()
        browser.pause(3000)

        const updateButton = $('//button[contains(text(), "UPDATE")]')
        expect(updateButton).toBeVisible()
        browser.pause(3000)
    })

    it('should verify edit group unsuccessful Group Name with < 5 characters', () => {
        browser.pause(3000)
        const groupMenu = $('//div[contains(text(), "Nobita")]//following-sibling::div[2]')
        groupMenu.scrollIntoView()
        groupMenu.click()
        browser.pause(6000) 

        const assignMembersTextBox = $('//div[contains(text(), "Nobita")]//following-sibling::div[2]//ul/li/p/div/span[contains(text(), "Edit")]')
        assignMembersTextBox.click()
        browser.pause(3000)

        const groupNameTextBox = $('//input[contains(@placeholder, "Enter Group name here")]')
        groupNameTextBox.click()
        groupNameTextBox.clearValue()
        groupNameTextBox.click()
        browser.keys('Hahi')
        browser.pause(3000)

        const groupDescriptionTextBox = $('//input[contains(@placeholder, "Enter Group description here")]')
        groupDescriptionTextBox.click()
        browser.pause(3000)

        const groupNameMessage = $('//p[contains(text(), "Name must between 5 and 80 characters & can contain alphabet, alphanumeric, space, . + - _")]')
        expect(groupNameMessage).toBeVisible()
        browser.pause(3000)
    })

    it.only('should verify edit group unsuccessful Group Name with > 80 characters ', () => {
        const groupMenu = $('//div[contains(text(), "Nobita")]//following-sibling::div[2]')
        groupMenu.scrollIntoView()
        groupMenu.click()
        browser.pause(6000) 

        const assignMembersTextBox = $('//div[contains(text(), "Nobita")]//following-sibling::div[2]//ul/li/p/div/span[contains(text(), "Edit")]')
        assignMembersTextBox.click()
        browser.pause(3000)

        const groupNameTextBox = $('//input[contains(@placeholder, "Enter Group name here")]')
        groupNameTextBox.click()
        browser.keys('hfaghfagfasfgsafgfgjfgasfasfggjkagjasgajfgajfgsfguyrgefhvhdbvxnvxnvhfvffgffgjhdvcvnvhdvxvjhsdgfsfgsfhdvxbvhdgvdgfsgfhdvhdjvshdjvd')
        browser.pause(3000)

        const groupDescriptionTextBox = $('//input[contains(@placeholder, "Enter Group description here")]')
        groupDescriptionTextBox.click()
        browser.pause(3000)

        const compulsoryMessage = $('//p[contains(text(), "Name must between 5 and 80 characters & can contain alphabet, alphanumeric, space, . + - _")]')
        expect(compulsoryMessage).toBeVisible()
        browser.pause(3000)
    })

    it('should verify edit group successfully with valid group name and group description', () => {
        const groupMenu = $('//div[contains(text(), "1 Test")]//following-sibling::div[2]')
        groupMenu.click()
        browser.pause(6000) 

        const assignMembersTextBox = $('//div[contains(text(), "1 Test")]//following-sibling::div[2]//ul/li/p/div/span[contains(text(), "Edit")]')
        assignMembersTextBox.click()
        browser.pause(3000)

        const groupNameTextBox = $('//input[contains(@placeholder, "Enter Group name here")]')
        groupNameTextBox.click()
        browser.keys('Nobita')
        browser.pause(3000)

        const groupDescriptionTextBox = $('//input[contains(@placeholder, "Enter Group description here")]')
        groupDescriptionTextBox.click()
        browser.keys('Nobita love Shizuka')
        browser.pause(3000)

        const addButton = $('//button[contains(text(), "UPDATE")]')
        addButton.click()
        browser.pause(3000)

        const updateSuccessfulMessage = $('//div[contains(text(), "Group has been updated successfully.")]')
        expect(updateSuccessfulMessage).toBeVisible()
        browser.pause(3000)
    })

    it('should verify display the assign devices popup ', () => {
        browser.pause(3000)
        const groupMenu = $('//div[contains(text(), "Nobita")]//following-sibling::div[2]')
        groupMenu.scrollIntoView()
        groupMenu.click()
        browser.pause(6000) 

        const assignMembersTextBox = $('//div[contains(text(), "Nobita")]//following-sibling::div[2]//ul/li/p/div/span[contains(text(), "Assign Devices")]')
        assignMembersTextBox.click()
        browser.pause(3000)

        const androidText = $('//p[contains(text(), "Device")]//following-sibling::div/p[contains(text(), "Android")]')
        expect(androidText).toBeVisible()
        browser.pause(3000)

        const iOSText = $('//p[contains(text(), "Device")]//following-sibling::div/p[contains(text(), "iOS")]')
        expect(iOSText).toBeVisible()
        browser.pause(3000)
    })

    it('should verify update the assign devices successfully ', () => {
        browser.pause(3000)
        const groupMenu = $('//div[contains(text(), "Nobita")]//following-sibling::div[2]')
        groupMenu.scrollIntoView()
        groupMenu.click()
        browser.pause(6000) 

        const assignMembersTextBox = $('//div[contains(text(), "Nobita")]//following-sibling::div[2]//ul/li/p/div/span[contains(text(), "Assign Devices")]')
        assignMembersTextBox.click()
        browser.pause(3000)

        // iPhone 6 Plus: //h2[contains(text(), "List of Devices")]/following-sibling::ul[2]/li[2]/div/div//preceding::div[contains(text(), "iPhone 6 Plus")]//preceding::div[1]
        const nameDeviceCheckBox = $('//h2[contains(text(), "List of Devices")]//following-sibling::ul[2]/li[1]/div[1]')
        //const nameDeviceCheckBox = $('//h2[contains(text(), "List of Devices")]/following-sibling::ul[2]/li[2]/div/div//preceding::div[contains(text(), "iPhone 6 Plus")]//preceding::div[1]')
        nameDeviceCheckBox.scrollIntoView()
        nameDeviceCheckBox.click()
        browser.pause(3000)

        const updateDeviceButton = $('//button[contains(text(), "Update")]')
        updateDeviceButton.click()
        browser.pause(3000)

        const updateSuccessfulMessage = $('//div[contains(text(), "Group devices have been updated successfully.")]')
        expect(updateSuccessfulMessage).toBeVisible()
        browser.pause(3000)

    })

    it('should verify click successfully of Hide unplugged devices', () => {

    })

    it('should verify display the remove confirmation popup ', () => {
        browser.pause(3000)
        const groupMenu = $('//div[contains(text(), "Nobita")]//following-sibling::div[2]')
        groupMenu.scrollIntoView()
        groupMenu.click()
        browser.pause(6000) 

        const assignMembersTextBox = $('//div[contains(text(), "Nobita")]//following-sibling::div[2]//ul/li/p/div/span[contains(text(), "Remove")]')
        assignMembersTextBox.click()
        browser.pause(3000)

        const confirmationMessage = $('//div[contains(text(), "All members and devices in a group will be unassigned and all sessions within the group will be transferred to the Organization Owner.")]')
        expect(confirmationMessage).toBeVisible()
        browser.pause(3000)
    })

    it('should verify remove group successfully', () => {
        browser.pause(3000)
        const groupMenu = $('//div[contains(text(), "Nobita")]//following-sibling::div[2]')
        groupMenu.scrollIntoView()
        groupMenu.click()
        browser.pause(6000) 

        const assignMembersTextBox = $('//div[contains(text(), "Nobita")]//following-sibling::div[2]//ul/li/p/div/span[contains(text(), "Remove")]')
        assignMembersTextBox.click()
        browser.pause(3000)


        const addButton = $('//button[contains(text(), "REMOVE")]')
        addButton.click()
        browser.pause(3000)

        const removeSuccessfulMessage = $('//div[contains(text(), "Group has been removed successfully.")]')
        expect(removeSuccessfulMessage).toBeVisible()
        browser.pause(3000)
    })

})
