let kanbanTestTable = new DataTable(['アカウントID', 'password',  'username']);
kanbanTestTable.add(['ここにログインID','ここにパスワード','ここにユーザー名']);

Feature('kanban');

Data(kanbanTestTable).Scenario('kanbanHome_test', async({I , current}) => {
    I.amOnPage('https://kanban-list2.herokuapp.com/');
    I.resizeWindow('maximize');
    I.click('#wrapper > div > p:nth-child(12) > a:nth-child(2)');
    I.fillField('#user_email', current.アカウントID);
    I.fillField('#user_password', current.password);
    I.click('ログイン');
    I.wait(10);
    I.waitForText('かんばんりすと');
//testProject001にtestTask001を追加して、ドラッグ＆ドロップでHighに移動する
    I.fillField('#prefix', 'testProject001');
    I.fillField('#add_todo_form_msg', 'testTask001');
    I.click('#add_todo_button');
    I.wait(2);
    I.dragAndDrop('/html/body/div[6]/div[4]/div[2]/div[2]/div/div[2]/div/div[1]/div/div[5]/ul/li', '#todo_h');
//    I.click('/html/body/div[6]/div[4]/div[2]/div[2]/div/div[2]/div/div[1]/div/div[5]/ul/li/div/div[1]/table/tbody/tr/td[1]/div/ins');
    I.wait(3);
//testProject001にtestTask002を追加して、ドラッグ＆ドロップでLowに移動する
I.fillField('#prefix', 'testProject001');
    I.fillField('#add_todo_form_msg', 'testTask002');
    I.click('#add_todo_button');
    I.wait(2);
    I.dragAndDrop('/html/body/div[6]/div[4]/div[2]/div[2]/div/div[2]/div/div[1]/div/div[5]/ul/li', '#todo_l');
    I.wait(3);
//testProject001にtestTask003を追加して、ドラッグ＆ドロップでdoingに移動する
I.fillField('#prefix', 'testProject001');
    I.fillField('#add_todo_form_msg', 'testTask003');
    I.click('#add_todo_button');
    I.wait(2);
    I.dragAndDrop('/html/body/div[6]/div[4]/div[2]/div[2]/div/div[2]/div/div[1]/div/div[5]/ul/li', '#doing');
    I.wait(3);
//testProject001にtestTask004を追加して、ドラッグ＆ドロップでwaitingに移動する
I.fillField('#prefix', 'testProject001');
    I.fillField('#add_todo_form_msg', 'testTask004');
    I.click('#add_todo_button');
    I.wait(2);
    I.dragAndDrop('/html/body/div[6]/div[4]/div[2]/div[2]/div/div[2]/div/div[1]/div/div[5]/ul/li', '#waiting');
    I.wait(3);
//testProject001にtestTask005を追加する
I.fillField('#prefix', 'testProject001');
    I.fillField('#add_todo_form_msg', 'testTask005');
    I.click('#add_todo_button');
    I.wait(2);
//メニューバーのタスク数を検証する
    I.seeTextEquals('1', '#todo_h_num');
    I.seeTextEquals('1', '#todo_m_num');
    I.seeTextEquals('1', '#todo_l_num');
    I.seeTextEquals('1', '#doing_num');
    I.seeTextEquals('1', '#waiting_num');

//dashboardで、High / Middle / Low / Doing / Waitingのタスク数を検証する
    I.click('#body_core > header > div > div > div > div > ul.nav.pull-left > li:nth-child(1) > a > i');
    I.wait(5);
    I.moveCursorTo('#highcharts-0 > svg > g:nth-child(15) > path:nth-child(2)')
    I.see('hightasks: 1');
    I.moveCursorTo('#highcharts-0 > svg > g:nth-child(16) > path:nth-child(2)')
    I.see('middletasks: 1');
    I.moveCursorTo('#highcharts-0 > svg > g:nth-child(19) > path:nth-child(2)')
    I.see('waitingtasks: 1');
    I.moveCursorTo('#highcharts-0 > svg > g:nth-child(18) > path:nth-child(2)')
    I.see('doingtasks: 1');
    I.moveCursorTo('#highcharts-0 > svg > g:nth-child(17) > path:nth-child(2)')
    I.see('lowtasks: 1');
//Active Book taskの、High / Middle / Low / Doing / Waitingのタスク数を検証する
    I.seeTextEquals('1', '#book_table > tbody > tr:nth-child(2) > td.todo_h');
    I.seeTextEquals('1', '#book_table > tbody > tr:nth-child(2) > td.todo_m');
    I.seeTextEquals('1', '#book_table > tbody > tr:nth-child(2) > td.todo_l');
    I.seeTextEquals('1', '#book_table > tbody > tr:nth-child(2) > td.doing');
    I.seeTextEquals('1', '#book_table > tbody > tr:nth-child(2) > td.waiting');
//Homeに戻る
    I.click('#body_core > header > div > div > div > div > ul.nav.pull-left > li:nth-child(2) > a > i');
    I.wait('5');
//Doneにする。
    I.click('/html/body/div[6]/div[4]/div[2]/div[2]/div/div[2]/div/div[1]/div/div[3]/ul/li/div/div[1]/table/tbody/tr/td[1]/div/ins');
    I.click('/html/body/div[6]/div[4]/div[2]/div[2]/div/div[2]/div/div[1]/div/div[5]/ul/li/div/div[1]/table/tbody/tr/td[1]/div/ins');
    I.click('/html/body/div[6]/div[4]/div[2]/div[2]/div/div[2]/div/div[1]/div/div[7]/ul/li/div/div[1]/table/tbody/tr/td[1]/div/ins');
    I.click('/html/body/div[6]/div[4]/div[2]/div[2]/div/div[2]/div/div[2]/div[1]/div[2]/ul/li/div/div[1]/table/tbody/tr/td[1]/div/ins');
    I.click('/html/body/div[6]/div[4]/div[2]/div[2]/div/div[2]/div/div[2]/div[2]/div[2]/ul/li/div/div[1]/table/tbody/tr/td[1]/div/ins');
//DoneListに移動してタスクを検証
    I.click('#body_core > header > div > div > div > div > ul.nav.pull-right > li:nth-child(2) > a > i');
    I.see('[testProject001] testTask001');
    I.see('[testProject001] testTask002');
    I.see('[testProject001] testTask003');
    I.see('[testProject001] testTask004');
    I.see('[testProject001] testTask005');
//dashboardでDone数を確認
    I.click('#body_core > header > div > div > div > div > ul.nav.pull-left > li:nth-child(1) > a > i');
    I.moveCursorTo('#highcharts-8 > svg > g.highcharts-tracker > g > rect:nth-child(1)');
    I.see('Done: 5');
//Homeに移動
    I.click('#body_core > header > div > div > div > div > ul.nav.pull-left > li:nth-child(2) > a > i');
    I.wait('5');
//タスクを削除する
    I.moveCursorTo('/html/body/div[6]/div[4]/div[2]/div[2]/div/div[2]/div/div[3]/div/div[2]/ul/li[1]/div/div[3]/table/tbody/tr/td[2]/table/tbody/tr/td[2]/div');
    I.click('/html/body/div[6]/div[4]/div[2]/div[2]/div/div[2]/div/div[3]/div/div[2]/ul/li[1]/div/div[3]/table/tbody/tr/td[2]/table/tbody/tr/td[3]/span/i');
    I.click('#delete_task_ok_button');
    I.moveCursorTo('/html/body/div[6]/div[4]/div[2]/div[2]/div/div[2]/div/div[3]/div/div[2]/ul/li[1]/div/div[3]/table/tbody/tr/td[2]/table/tbody/tr/td[2]');
    I.click('/html/body/div[6]/div[4]/div[2]/div[2]/div/div[2]/div/div[3]/div/div[2]/ul/li[1]/div/div[3]/table/tbody/tr/td[2]/table/tbody/tr/td[3]/span/i');
    I.click('#delete_task_ok_button');

    I.moveCursorTo('/html/body/div[6]/div[4]/div[2]/div[2]/div/div[2]/div/div[3]/div/div[2]/ul/li[1]/div/div[3]/table/tbody/tr/td[2]/table/tbody/tr/td[2]');
    I.click('/html/body/div[6]/div[4]/div[2]/div[2]/div/div[2]/div/div[3]/div/div[2]/ul/li[1]/div/div[3]/table/tbody/tr/td[2]/table/tbody/tr/td[3]/span/i');
    I.click('#delete_task_ok_button');
    I.moveCursorTo('/html/body/div[6]/div[4]/div[2]/div[2]/div/div[2]/div/div[3]/div/div[2]/ul/li[1]/div/div[3]/table/tbody/tr/td[2]/table/tbody/tr/td[2]');
    I.click('/html/body/div[6]/div[4]/div[2]/div[2]/div/div[2]/div/div[3]/div/div[2]/ul/li[1]/div/div[3]/table/tbody/tr/td[2]/table/tbody/tr/td[3]/span/i');
    I.click('#delete_task_ok_button');
    I.moveCursorTo('/html/body/div[6]/div[4]/div[2]/div[2]/div/div[2]/div/div[3]/div/div[2]/ul/li[1]/div/div[3]/table/tbody/tr/td[2]/table/tbody/tr/td[2]');
    I.click('/html/body/div[6]/div[4]/div[2]/div[2]/div/div[2]/div/div[3]/div/div[2]/ul/li[1]/div/div[3]/table/tbody/tr/td[2]/table/tbody/tr/td[3]/span/i');
    I.click('#delete_task_ok_button');

    I.click('Logout');
});
