import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import LoginPage from "./Login.Page";

describe("Login Page", () => {
    it("should render with required fields", () => {
        // Arange
        render(<LoginPage />);
        // Act
        // Assert
        expect(screen.getByText("Sign in")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
        expect(
            screen.getByRole("button", { name: "Log in" }),
        ).toBeInTheDocument();
        expect(
            screen.getByRole("checkbox", { name: "Remember me" }),
        ).toBeInTheDocument();
        expect(screen.getByText("Forgot password")).toBeInTheDocument();
    });
});
