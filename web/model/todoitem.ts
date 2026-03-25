// ItemStatus enum
export enum ItemStatus {
  NotStarted = "Not Started",
  InProgress = "In Progress",
  Completed = "Completed",
  Archived = "Archived"
}

// TodoItem interface
export interface TodoItem {
  id: string;
  title: string;
  desc?: string | null;
  itemStatus: ItemStatus;
  creationDate: Date;
  lastUpdated: Date;
}

// helper to create items (since Swift auto-generates some fields)
const createTodo = (
  title: string,
  desc: string | null,
  itemStatus: ItemStatus
): TodoItem => ({
  id: crypto.randomUUID(),
  title,
  desc,
  itemStatus,
  creationDate: new Date(),
  lastUpdated: new Date()
});

// mock data
export const mockData: TodoItem[] = [
  // Not Started
  createTodo(
    "Buy groceries",
    "Milk, Eggs, Bread, Spinach",
    ItemStatus.NotStarted
  ),
  createTodo(
    "Schedule dentist appointment",
    null,
    ItemStatus.NotStarted
  ),

  // In Progress
  createTodo(
    "Build SwiftUI login screen",
    "Implement validation and error handling",
    ItemStatus.InProgress
  ),
  createTodo(
    "Read 20 pages of Clean Code",
    "Focus on functions chapter",
    ItemStatus.InProgress
  ),

  // Completed
  createTodo(
    "Morning workout",
    "30 min strength training",
    ItemStatus.Completed
  ),
  createTodo(
    "Submit project report",
    null,
    ItemStatus.Completed
  ),

  // Archived
  createTodo(
    "2024 Tax Filing",
    "All documents submitted and approved",
    ItemStatus.Archived
  ),
  createTodo(
    "Old portfolio redesign",
    "Replaced with new 2025 version",
    ItemStatus.Archived
  )
];