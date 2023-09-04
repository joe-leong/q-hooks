---
group: 状态
---

# useArray

管理数组类型状态的 Hook

## 代码演示

<code src="./demo/demo.tsx"></code>

## API

```typescript
const [state, { addItem, updateItem, deleteItem, reset }] = useArray<T>(initialValue);
```

### Result

| 参数       | 说明         | 类型                                           |
| ---------- | ------------ | ---------------------------------------------- |
| state      | Array 数组   | `T[]`                                          |
| addItem    | 添加元素     | `(data: T) => void`                            |
| updateItem | 更新元素     | `((willReplaceIndex: number, data: T) => void` |
| deleteItem | 删除元素     | `(willDeleteIndex: number) => void`            |
| reset      | 重置为默认值 | `() => void`                                   |

### Params

| 参数         | 说明              | 类型  | 默认值 |
| ------------ | ----------------- | ----- | ------ |
| initialValue | 传入的 Array 参数 | `T[]` | -      |
