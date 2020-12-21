Feature: Login smoke tests

  @takeScreenshotE2E
  Scenario Outline: Login to the Qa Sandbox app
  This is a smoke test which confirm that app is started and user is logged to the app.

    Given Robot navigates to the login page
    When Robot fills user name field with value: <username>
    And Robot fills password field with value: <password>
    And Robot clicks on the Sing In button
    Then Robot wants to see if user is logged in to the app

    Examples:
      | username                 | password      |
      | milovancabrilo@gmail.com | bananamen1984 |

  








