from langchain.tools import tool

from langchain.tools import tool


@tool
def inspect_prompt(prompt: str) -> dict:
    """
    Inspect prompts for missing components
    before AI analysis.
    """

    findings=[]

    lower_prompt=prompt.lower()


    if "you are" not in lower_prompt:
        findings.append(
            "No clear role definition"
        )


    if "format" not in lower_prompt:
        findings.append(
            "No output format defined"
        )


    if "example" not in lower_prompt:
        findings.append(
            "No examples provided"
        )


    if (
        "if uncertain" not in lower_prompt
        and
        "if unsure" not in lower_prompt
    ):

        findings.append(
            "No uncertainty handling"
        )


    if (
        "only"
        not in lower_prompt
        and
        "must"
        not in lower_prompt
    ):

        findings.append(
            "No behavioral constraints"
        )


    if "if" not in lower_prompt:

        findings.append(
            "No fallback behavior"
        )


    return {

        "missing_elements": findings,

        "check_count":6,

        "passed_checks":
            6-len(findings)
    }