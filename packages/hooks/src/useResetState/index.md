---
group: 状态
---

# useResetState

提供重置 state 方法的 Hooks，用法与 `React.useState` 基本一致。

## 代码演示

### 基础用法

<code src="./demo/demo1.tsx" ></code>

## API

```typescript
const [state, setState, resetState] = useResetState<S>(
  initialState: S | (() => S),
): [S, Dispatch<SetStateAction<S>>, () => void]
```
