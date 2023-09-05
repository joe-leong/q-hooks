---
order: 1
group: 请求
---

# 基础用法

介绍 `useRequest` 最核心，最基础的能力，也就是 `useRequest` 内核的能力

## 默认请求

默认情况下，`useRequest` 第一个参数是一个异步函数，在组件初始化时，会自动执行该异步函数。同时自动管理该异步函数的 `loading` , `data` , `error` 等状态。

```js
const { data, error, loading } = useRequest(service);
```

<br />

<code src="./demo/default.tsx"></code>

## 手动触发

如果设置了 `options.manual = true`，则 `useRequest` 不会默认执行，需要通过 `run` 或者 `runAsync` 来触发执行。

```tsx | pure
const { loading, run, runAsync } = useRequest(service, {
  manual: true,
});

<button onClick={run} disabled={loading}>
  {loading ? 'Loading' : 'Edit'}
</button>;
```

`run` 与 `runAsync` 的区别在于：

- `run` 是一个普通的同步函数，我们会自动捕获异常，你可以通过 `options.onError` 来处理异常时的行为。
- `runAsync` 是一个返回 `Promise` 的异步函数，如果使用 `runAsync` 来调用，则意味着你需要自己捕获异常。

  ```ts
  runAsync()
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
  ```

接下来我们通过修改用户名这个简单的场景，来演示 useRequest 手动触发模式，以及 `run` 与 `runAsync` 的区别。

<code src='./demo/manual-run.tsx'></code>
<code src='./demo/manual-runAsync.tsx'></code>

## 生命周期

`useRequest` 提供了以下几个生命周期配置项，供你在异步函数的不同阶段做一些处理。

- `onBefore`：请求之前触发
- `onSuccess`：请求成功触发
- `onError`：请求失败触发
- `onFinally`：请求完成触发

<code src="./demo/lifeCycle.tsx"></code>
