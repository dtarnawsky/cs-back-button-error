Upon Application Launch, click on tab2.
On tab two page click on Go to The first button.
Upon navigation it will take to theFirstPage.ts, (back button is enabled here).
Click on Go to the second button, it will take to theSecondPage.ts. (we are disabling back button upon view enter and enabling again on view leave).
The only way to go out of this page is by clicking the tabs. So lets click on tab 3.
Once on tab 3 click the browser back(if on chrome/safari browser) or hardware back. The Android-back-button.guard.ts will be triggered which will cancel the navigation.
Click the hardware back again, it will take directly to the firstPage.ts.
I’ve noticed this happening only with back navigation, meaning that once you come out of the secondPage to tab1/tab2/tab3 and just toggle between tab1 tab2 and tab3, upon entering tab2 the guard will be activated every time.
P.S. Zip contains Node Modules as well