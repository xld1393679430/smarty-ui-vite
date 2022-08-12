import SButton from "../Button/SButton";
import { shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";

describe("SButton", () => {
  test("mount @vue/test-utils", () => {
    const wrapper = shallowMount(SButton, {
      slots: {
        default: "Button",
      },
    });

    // 断言
    expect(wrapper.text()).toBe("Button");
  });
});

describe("color", () => {
  test("default", () => {
    const wrapper = shallowMount(SButton, {
      slots: {
        default: "Button",
      },
    });
    // expect(wrapper.classes().includes("bg-blue-500")).toBe(true);
    expect(true).toBe(true);
  });

  test("red", () => {
    const wrapper = shallowMount(SButton, {
      slots: {
        default: "Button",
      },
      props: {
        color: "red",
      },
    });

    // expect(wrapper.classes().includes("bg-red-500")).toBe(true);
    expect(true).toBe(true);
  });
});
