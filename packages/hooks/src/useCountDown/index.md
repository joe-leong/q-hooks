---
group: 状态
---

# useCountDown

用于管理倒计时的hook

## 代码演示

### 基础使用

<code src="./demo/demo1.tsx"></code>

### 手动控制

<code src="./demo/demo2.tsx"></code>

### targetDate使用

<code src="./demo/demo3.tsx"></code>

### 同时传入leftTime与targetDate

<code src='./demo/demo4.tsx'></code>

:::info{title=提示}
如果同时传入leftTime 与 targetDate，以leftTime为准
:::

## API

```typescript
type TDate = Date | number | string | undefined;

interface FormattedRes {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
}

const [countdown, formattedRes] = useCountDown({
  leftTime,
  targetDate,
  interval,
  onEnd,
});
```
