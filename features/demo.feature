Feature: Print given string
    Test the feature of printing.

    Scenario: Print given string
        Given Please print: "hello cucumber"
        When Print string
        Then Display string: "hello cucumber"