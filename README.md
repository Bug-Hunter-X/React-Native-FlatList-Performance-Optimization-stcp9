# React Native FlatList Performance Optimization

This repository demonstrates a common performance issue in React Native's FlatList component when dealing with large datasets and provides an optimized solution.

## Problem
Using FlatList with a large dataset can result in slow rendering, janky scrolling, and overall poor user experience if not optimized correctly.

## Solution
The solution includes implementing several key optimizations to improve FlatList performance:

*   **Efficient Key Extraction:**  Using a unique key for each item is crucial for efficient rendering and update detection.
*   `getItemLayout` prop: If you know the size of your items, using getItemLayout allows FlatList to measure elements more efficiently.
*   `removeClippedSubviews` prop: Setting to `true` improves performance by removing offscreen elements.
*   Memoization: Using `useMemo` or `React.memo` to prevent unnecessary re-renders of components within the FlatList items significantly improves performance. 

## How to Run
1. Clone the repository.
2. Run `npm install`.
3. Run `npx react-native run-android` or `npx react-native run-ios`.
