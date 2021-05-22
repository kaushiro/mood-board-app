import React from "react";

import { render } from "utils/testing/helpers/customRender";
import user from "utils/testing/dummy/user";

import messages from "./messages";

import Footer from "./";

const props = {
  className: "main-footer",
  user: user,
  isSignIn: false,
};

describe("Footer component", () => {
  it("displays the copyright information", () => {
    const { getByText } = render(<Footer {...props} />);

    getByText(messages.footer.defaultMessage);
  });

  describe("On the signin page", () => {
    it("doesn't display the Help and Support item", () => {
      const { getByText, queryByText } = render(
        <Footer {...props} isSignIn={true} />
      );

      getByText(messages.privacyNotice.defaultMessage);
      getByText(messages.termsOfUse.defaultMessage);
      getByText(messages.cookiePolicy.defaultMessage);
      getByText(messages.about.defaultMessage);
      expect(queryByText(messages.help.defaultMessage)).toBe(null);
    });
  });

  describe("For a non-ringfenced user after signing in", () => {
    it("displays all links, including the Help and Support item", () => {
      const { getByText } = render(<Footer {...props} />);

      getByText(messages.privacyNotice.defaultMessage);
      getByText(messages.termsOfUse.defaultMessage);
      getByText(messages.cookiePolicy.defaultMessage);
      getByText(messages.about.defaultMessage);
      getByText(messages.help.defaultMessage);
    });
  });

  describe("For a ringfenced user after signing in", () => {
    it("doesn't display the Help and Support item", () => {
      const { getByText, queryByText } = render(
        <Footer {...props} user={{ ...user, ringfenced: true }} />
      );

      getByText(messages.privacyNotice.defaultMessage);
      getByText(messages.termsOfUse.defaultMessage);
      getByText(messages.cookiePolicy.defaultMessage);
      getByText(messages.about.defaultMessage);
      expect(queryByText(messages.help.defaultMessage)).toBe(null);
    });
  });
});
