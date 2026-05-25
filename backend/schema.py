from pydantic import BaseModel, Field
from typing import Literal


class PromptAnalyzer(BaseModel):

    prompt_type: Literal[
        "assistant",
        "agent",
        "rag",
        "classification",
        "extraction",
        "coding",
        "chatbot",
        "roleplay",
        "unknown"
    ] = Field(
        description="Best guess of prompt category"
    )


    clarity_score: int = Field(
        ge=0,
        le=10,
        description="""
        Measures how understandable and clear
        the prompt instructions are.

        0-2 = very confusing
        3-4 = weak
        5-6 = acceptable
        7-8 = clear
        9-10 = highly precise
        """
    )


    specificity_score: int = Field(
        ge=0,
        le=10,
        description="""
        Measures whether instructions are specific
        or vague.
        """
    )


    hallucination_risk: int = Field(
        ge=0,
        le=10,
        description="""
        Measures probability model invents
        information.

        0=very low
        10=extremely high
        """
    )


    ambiguity_score: int = Field(
        ge=0,
        le=10,
        description="""
        Measures unclear wording,
        multiple interpretations,
        or missing instructions.

        Higher means more ambiguous.
        """
    )


    constraint_score: int = Field(
        ge=0,
        le=10,
        description="""
        Measures whether prompt sets boundaries.

        Example:
        output limits
        formatting
        behavior rules
        refusal rules
        """
    )


    missing_elements: list[str] = Field(
        description="""
        Missing components detected.

        Examples:
        - no examples
        - no output format
        - no uncertainty handling
        - no constraints
        - no fallback behavior
        """
    )


    strengths: list[str] = Field(
        description="Strong aspects detected"
    )


    weaknesses: list[str] = Field(
        description="Weaknesses detected"
    )


    improvements: list[str] = Field(
        description="""
        Concrete improvements.

        Must be actionable.
        """
    )


    before_prompt: str = Field(
        description="Original prompt"
    )


    rewritten_prompt: str = Field(
        description="""
        Fully rewritten improved version.

        Keep original intent.
        """
    )


    learning_note: str = Field(
        description="""
        Short educational explanation
        teaching why improvements matter.
        Max 100 words.
        """
    )


    score_reasoning: str = Field(
        description="""
        Explain why scores were assigned.
        """
    )


    overall_score: int = Field(
        ge=0,
        le=10,
        description="""
        Overall prompt quality.

        Rubric:

        0-2 unusable

        3-4 weak

        5-6 functional

        7-8 good

        9-10 production quality
        """
    )