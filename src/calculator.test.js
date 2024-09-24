// src/Calculator.test.js

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from './calculator';

test('handles empty input', () => {
    render(<Calculator />);
    fireEvent.submit(screen.getByRole('button'));
    expect(screen.getByText(/Result: 0/i)).toBeInTheDocument();
});

test('calculates sum of two numbers', () => {
    render(<Calculator />);
    fireEvent.change(screen.getByRole('textbox'), { target: { value: '1,2' } });
    fireEvent.submit(screen.getByRole('button'));
    expect(screen.getByText(/Result: 3/i)).toBeInTheDocument();
});

test('handles newlines as separators', () => {
    render(<Calculator />);
    fireEvent.change(screen.getByRole('textbox'), { target: { value: '1\n2,3' } });
    fireEvent.submit(screen.getByRole('button'));
    expect(screen.getByText(/Result: 6/i)).toBeInTheDocument();
});

test('supports custom delimiters', () => {
    render(<Calculator />);
    fireEvent.change(screen.getByRole('textbox'), { target: { value: '//;\n1;2;3' } });
    fireEvent.submit(screen.getByRole('button'));
    expect(screen.getByText(/Result: 6/i)).toBeInTheDocument();
});

test('throws error on negative numbers', () => {
    render(<Calculator />);
    fireEvent.change(screen.getByRole('textbox'), { target: { value: '1,-1,2' } });
    fireEvent.submit(screen.getByRole('button'));
    expect(screen.getByText(/Negative numbers not allowed: -1/i)).toBeInTheDocument();
});

test('ignores numbers greater than 1000', () => {
    render(<Calculator />);
    fireEvent.change(screen.getByRole('textbox'), { target: { value: '1001,2' } });
    fireEvent.submit(screen.getByRole('button'));
    expect(screen.getByText(/Result: 2/i)).toBeInTheDocument();
});

test('ignores non-numeric values', () => {
    render(<Calculator />);
    fireEvent.change(screen.getByRole('textbox'), { target: { value: '1,a,2' } });
    fireEvent.submit(screen.getByRole('button'));
    expect(screen.getByText(/Result: 3/i)).toBeInTheDocument();
});
