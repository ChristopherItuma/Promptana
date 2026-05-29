import { MdHideSource } from "react-icons/md";
import { SlEmotsmile } from "react-icons/sl";
import { IoSpeedometerOutline } from "react-icons/io5";

export const values = [
  {
    icon: <MdHideSource />,
    title: "Reduce Ambiguity and Hallucinations",
    subtitle:
      "Weak prompts lead to inconsistent and unreliable AI responses. Promptana helps you detect ambiguity and hallucination risks before deployment.",
    animation_delay:0.1
  },

  {
    icon: <SlEmotsmile />,
    title: "Improve User Experience",
    subtitle:
      "Reliable AI responses build trust. Promptana helps developers create more consistent prompt behavior for user-facing applications.",
    animation_delay:0.2
  },

  {
    icon: <IoSpeedometerOutline />,
    title: "Build Faster With Confidence",
    subtitle:
      "Stop second-guessing your prompts. Promptana helps you validate prompt quality quickly so you can focus on building.",
    animation_delay:0.3
  }
];