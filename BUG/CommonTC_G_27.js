var uuid = require('uuid');

describe('Kiểm tra chức năng Trim space', function() {
    beforeEach(function() {
        cy.visit('signin');
    });

    var randInt = Date.now();
    var randStr = uuid.v4();
    var vi_chars = [
        'é', 'è', 'ẻ', 'ẽ', 'ẹ',
        'ê', 'ế', 'ề', 'ể', 'ễ', 'ệ',
        'ú', 'ù', 'ủ', 'ũ', 'ụ',
        'ư', 'ứ', 'ừ', 'ử', 'ữ', 'ự',
        'í', 'ì', 'ỉ', 'ĩ', 'ị',
        'ó', 'ò', 'ỏ', 'õ', 'ọ',
        'ơ', 'ớ', 'ờ', 'ở', 'ỡ', 'ợ',
        'ô', 'ố', 'ồ', 'ổ', 'ỗ', 'ộ',
        'á', 'à', 'ả', 'ã', 'ạ',
        'ă', 'ắ', 'ằ', 'ẳ', 'ẵ', 'ặ',
        'â', 'ấ', 'ầ', 'ẩ', 'ẫ', 'ậ',
        'đ'
    ];
    var vi_char = vi_chars[Math.floor(Math.random() * vi_chars.length)];
    var vi_randStr = randStr + vi_char;

    it('Quản lý người dùng', function () {
        // login as admin
        cy.get('body > div > div.login.ng-scope > div.content > form > div:nth-child(2) > div > input').type('admin_10@gmail.com');
        cy.get('body > div > div.login.ng-scope > div.content > form > div:nth-child(3) > div > input').type('Methadone@2017');
        cy.get('body > div > div.login.ng-scope > div.content > form > button').click();
        cy.wait(1000);

        cy.visit('main/admin/administrators');
        cy.wait(500);

        // add
        var email = 'test_' + randInt + '@gmail.com';
        cy.get('body > div > div.page-container.ng-scope > div > div.page-content-wrapper > div > div > div > div.portlet-title > div.inputs > a').click();
        cy.get('body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div > form > div.modal-body > div > div:nth-child(1) > input').type(email);
        cy.get('body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div > form > div.modal-body > div > div:nth-child(2) > input').type('1234abcdXYZ!@#');
        cy.get('body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div > form > div.modal-body > div > div:nth-child(3) > input').type(vi_randStr);
        cy.get('body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div > form > div.modal-body > div > div:nth-child(4) > input').type(vi_randStr);
        cy.get('body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div > form > div.modal-body > div > div:nth-child(5) > div.ui-select-container.select2.select2-container.ng-pristine.ng-untouched.ng-scope.ng-empty.ng-invalid.ng-invalid-required > a > span.select2-chosen.ng-binding').click();
        cy.get('.select2-result-label.ui-select-choices-row-inner').eq(0).click();
        cy.get('body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div > form > div.modal-footer > button').click();
        cy.wait(1000);

        // test
        cy.get('body > div > div.page-container.ng-scope > div > div.page-content-wrapper > div > div > div > div.portlet-title > div.inputs > div > div > form > input').type(email).type('{enter}');
        cy.wait(500);
        cy.get('body > div > div.page-container.ng-scope > div > div.page-content-wrapper > div > div > div > div.portlet-body > div.max-width-100-pc.scrollable > table > tbody > tr:nth-child(1) > td:nth-child(2)').should('contain', vi_char);
    });

    it('Quản lý cơ sở', function() {
        // login as admin
        cy.get('body > div > div.login.ng-scope > div.content > form > div:nth-child(2) > div > input').type('admin_10@gmail.com');
        cy.get('body > div > div.login.ng-scope > div.content > form > div:nth-child(3) > div > input').type('Methadone@2017');
        cy.get('body > div > div.login.ng-scope > div.content > form > button').click();
        cy.wait(1000);

        cy.visit('main/admin/administrators/issuing_agency');
        cy.wait(500);

        // add
        cy.get('body > div > div.page-container.ng-scope > div > div.page-content-wrapper > div > div > div > div.portlet-title > div.inputs > a').click();
        cy.get('body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div > form > div.modal-body > div > div:nth-child(1) > div:nth-child(2) > input').type(vi_randStr);
        cy.get('body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div > form > div.modal-body > div > div:nth-child(1) > div:nth-child(4) > input').type(vi_randStr);
        cy.get('body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div > form > div.modal-body > div > div:nth-child(2) > div:nth-child(2) > div.ui-select-container.select2.select2-container.ng-pristine.ng-untouched.ng-scope.ng-empty.ng-invalid.ng-invalid-required > a > span.select2-chosen.ng-binding').click();
        cy.get('#ui-select-choices-row-0-0 > div > span').click();
        cy.get('body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div > form > div.modal-body > div > div:nth-child(2) > div:nth-child(4) > div.ui-select-container.select2.select2-container.ng-pristine.ng-untouched.ng-scope.ng-empty.ng-invalid.ng-invalid-required > a > span.select2-chosen.ng-binding').click();
        cy.get('#ui-select-choices-row-1-0 > div').click();
        cy.get('body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div > form > div.modal-body > div > div:nth-child(2) > div:nth-child(6) > div.ui-select-container.select2.select2-container.ng-pristine.ng-untouched.ng-scope.ng-empty.ng-invalid.ng-invalid-required > a > span.select2-chosen.ng-binding').click();
        cy.get('#ui-select-choices-row-2-0 > div').click();
        cy.get('body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div > form > div.modal-footer > button').click();
        cy.wait(1000);

        // test
        cy.get('body > div > div.page-container.ng-scope > div > div.page-content-wrapper > div > div > div > div.portlet-body > div.max-width-100-pc.scrollable > table > tbody > tr:nth-child(1) > td:nth-child(3)').should('contain', vi_char);
        cy.get('body > div > div.page-container.ng-scope > div > div.page-content-wrapper > div > div > div > div.portlet-body > div.max-width-100-pc.scrollable > table > tbody > tr:nth-child(1) > td:nth-child(7)').should('contain', vi_char);
    });

    it('Danh mục thuốc', function() {
        // login as admin
        cy.get('body > div > div.login.ng-scope > div.content > form > div:nth-child(2) > div > input').type('admin_10@gmail.com');
        cy.get('body > div > div.login.ng-scope > div.content > form > div:nth-child(3) > div > input').type('Methadone@2017');
        cy.get('body > div > div.login.ng-scope > div.content > form > button').click();
        cy.wait(1000);

        cy.visit('main/admin/administrators/medicine_list');
        cy.wait(500);

        // add
        cy.get('body > div > div.page-container.ng-scope > div > div.page-content-wrapper > div > div > div > div.portlet-title > div.inputs > a').click();
        cy.get('body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div > form > div.modal-body > div > div:nth-child(1) > div.col-xs-8.form-group > input').type(vi_randStr);
        cy.get('body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div > form > div.modal-body > div > div:nth-child(2) > div.col-xs-8.form-group > input').type(vi_randStr);
        cy.get('body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div > form > div.modal-body > div > div:nth-child(3) > div.col-xs-8.form-group > input').type(10);
        cy.get('body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div > form > div.modal-body > div > div:nth-child(4) > div.col-xs-8.form-group > input').type(1000);
        cy.get('body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div > form > div.modal-body > div > div:nth-child(5) > div.col-xs-8.form-group > input').type(vi_randStr);
        cy.get('body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div > form > div.modal-body > div > div:nth-child(7) > div.col-xs-8.form-group > div.ui-select-container.select2.select2-container.ng-pristine.ng-untouched.ng-scope.ng-empty.ng-invalid.ng-invalid-required > a > span.select2-chosen.ng-binding').click();
        cy.get('.select2-result-label.ui-select-choices-row-inner').eq(0).click();
        cy.get('body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div > form > div.modal-footer > button').click();
        cy.wait(1000);

        // test
        cy.get('body > div > div.page-container.ng-scope > div > div.page-content-wrapper > div > div > div > div.portlet-title > div.row > div > div:nth-child(1) > form > input').type(randStr).type('{enter}');
        cy.wait(500);
        cy.get('body > div > div.page-container.ng-scope > div > div.page-content-wrapper > div > div > div > div.portlet-body > div.max-width-100-pc.scrollable > table > tbody > tr:nth-child(1) > td:nth-child(2)').should('contain', vi_char);
        cy.get('body > div > div.page-container.ng-scope > div > div.page-content-wrapper > div > div > div > div.portlet-body > div.max-width-100-pc.scrollable > table > tbody > tr:nth-child(1) > td:nth-child(3)').should('contain', vi_char);
        cy.get('body > div > div.page-container.ng-scope > div > div.page-content-wrapper > div > div > div > div.portlet-body > div.max-width-100-pc.scrollable > table > tbody > tr:nth-child(1) > td:nth-child(6)').should('contain', vi_char);
    });

    var testcases = [
        {
            url: 'main/admin/administrators/employments',
            name: 'Danh mục nghề nghiệp'
        },
        {
            url: 'main/admin/administrators/maritals',
            name: 'Danh mục hôn nhân'
        },
        {
            url: 'main/admin/administrators/educations',
            name: 'Danh mục trình độ học vấn'
        },
        {
            url: 'main/admin/administrators/stop_reasons',
            name: 'Danh mục lý do ngừng điều trị'
        },
        {
            url: 'main/admin/administrators/manufacturers',
            name: 'Danh mục nhà sản xuất'
        },
        {
            url: 'main/admin/administrators/providers',
            name: 'Danh mục nhà phân phối'
        },
        {
            url: 'main/admin/administrators/sources',
            name: 'Danh mục nguồn thuốc'
        }
    ];

    testcases.forEach(function(testcase) {
        it(testcase.name, function() {
            // login as admin
            cy.get('body > div > div.login.ng-scope > div.content > form > div:nth-child(2) > div > input').type('admin_10@gmail.com');
            cy.get('body > div > div.login.ng-scope > div.content > form > div:nth-child(3) > div > input').type('Methadone@2017');
            cy.get('body > div > div.login.ng-scope > div.content > form > button').click();
            cy.wait(1000);

            cy.visit(testcase.url);
            cy.wait(500);

            // add
            cy.get('body > div > div.page-container.ng-scope > div > div.page-content-wrapper > div > div > div > div.portlet-title > div.inputs > a').click();
            cy.get('body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div > form > div.modal-body input').type(vi_randStr);
            cy.get('body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div > form > div.modal-footer > button').click();
            cy.wait(1000);

            // test
            cy.get('body > div > div.page-container.ng-scope > div > div.page-content-wrapper > div > div > div > div.portlet-title > div.row > div > div:nth-child(1) > form > input').type(randStr).type('{enter}');
            cy.wait(500);
            cy.get('body > div > div.page-container.ng-scope > div > div.page-content-wrapper > div > div > div > div.portlet-body > div.max-width-100-pc.scrollable > table > tbody > tr > td:nth-child(2)').should('contain', vi_char);
        });
    });
});