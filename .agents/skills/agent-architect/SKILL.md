---
name: agent-architect
description: >
  Autonomous AI agent system design, tool calling definitions (Zod), prompt engineering SOPs,
  conversation memory management, RAG retrieval architectures, and multi-agent orchestration.
  Use when designing, building, debugging, or optimizing AI agents, chatbot assistants,
  function calling workflows, or LLM-powered backends.
---

# 🤖 Agent-Architect: AI Agent Systems & Tool Orchestration

Agent-Architect enforces robust engineering patterns for building reliable, deterministic, and safe autonomous AI agents and conversational interfaces.

---

## 🧩 The 6 Agent Architecture Pillars

### 1. Robust Tool / Function Calling Schemas (Zod)
* Define explicit, typed input schemas for every agent tool using Zod:
  ```typescript
  import { z } from "zod";

  export const searchInventoryTool = {
    description: "Search enterprise hardware stock by category or keyword.",
    parameters: z.object({
      category: z.enum(["server", "networking", "laptop", "license"]).optional(),
      keyword: z.string().min(2).describe("Search query for device name or model"),
      limit: z.number().int().min(1).max(20).default(5),
    }),
    execute: async ({ category, keyword, limit }) => {
      // Safe parameterized database query
    },
  };
  ```
* Every tool parameter must include a clear `.describe()` explaining its intent to the LLM.

### 2. Zero-Hallucination System Prompting (SOP Guardrails)
* **Identity & Scope**: Explicitly declare what the agent is allowed and NOT allowed to do.
* **Grounding Rule**: Instruct the agent to strictly rely on tool outputs for facts, numbers, prices, and inventory status.
* **Fallback Behavior**: Provide clear guidelines on how to gracefully say "I don't have access to that information" rather than inventing answers.

### 3. State & Memory Management
* **Short-Term Memory**: Sliding window of recent message history (`messages.slice(-10)`).
* **Long-Term Memory**: Persist structured session state and entity facts in database (PostgreSQL/Supabase).
* **Token Pruning**: Summarize older conversations to prevent context window overflow while preserving critical user context.

### 4. Streaming Responses & UX Feedback
* Use streaming interfaces (e.g., Vercel AI SDK `streamText` / `useChat`) for realtime token rendering.
* Provide visual indicators when tools are executing (`isToolCalling`, animated tool pill/badge) so the user understands the agent is doing background work.

### 5. Multi-Agent & Subagent Delegation
* Separate monolithic agents into specialized subagents:
  * **Router / Orchestrator**: Directs user intent to specialized subagents.
  * **Specialist Agent (e.g., Sales, Tech Support, Billing)**: Executes domain-specific tools with focused context.
  * **Critic / Validator**: Verifies generated outputs before presenting to the user.

### 6. Error Handling & Graceful Degradation
* Wrap all tool executions in `try/catch` blocks.
* Return user-friendly error messages when external APIs (WhatsApp, Payment, CRM) fail, rather than crashing the chat stream.

---

## 🎯 Trigger Keywords
* `agent-architect`, `agent`, `AI agent`, `tool calling`, `function calling`, `chatbot`, `system prompt`, `RAG`, `LLM backend`, `memory agent`.
