## uniIDHasRole

新增于`HBuilderX 3.1.15-alpha`，判断当前用户是否拥有某角色。
Added in `HBuilderX 3.1.15-alpha` to determine whether the current user has a certain role.

> 需要在token内缓存角色权限才可使用，请参考：[缓存角色权限](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=cachepermissionintoken)
> You need to cache role permissions in the token to use, please refer to: [Cache role permissions](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=cachepermissionintoken)

**在模板内使用**
**Use within the template**

```html
<template>
  <view v-if="uniIDHasRole('admin')">仅管理员可见</view>
  <view v-if="uniIDHasRole('admin')">Only visible to the administrator</view>
</template>
```

**在页面/组件js代码中使用**
**Use in page/component js code**

```html
<template>
  <view>xxx</view>
</template>
<script>
  export default {
    onLoad(){
      console.log('当前用户是否拥有管理员角色：', this.uniIDHasRole('admin'))
	  console.log('Does the current user have an administrator role:', this.uniIDHasRole('admin'))
    }
  }
</script>
```

## uniIDHasPermission
## uniIDHasPermission

新增于`HBuilderX 3.1.15-alpha`，判断当前用户是否拥有某权限，注意：admin角色的用户拥有所有权限
Added in `HBuilderX 3.1.15-alpha`, to determine whether the current user has a certain permission, note: users with the admin role have all permissions

> 需要在token内缓存角色权限才可使用，请参考：[缓存角色权限](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=cachepermissionintoken)
> You need to cache role permissions in the token to use, please refer to: [Cache role permissions](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=cachepermissionintoken)

**在模板内使用**
**Use within the template**

```html
<template>
  <view v-if="uniIDHasPermission('edit')">拥有编辑权限时可见</view>
  <view v-if="uniIDHasPermission('edit')">Visible when you have editing permissions</view>
</template>
```

**在页面/组件js代码中使用**
**Use in page/component js code**

```html
<template>
  <view>xxx</view>
</template>
<script>
  export default {
    onLoad(){
      console.log('当前用户是否拥有编辑权限：', this.uniIDHasPermission('edit'))
	  console.log('Does the current user have editing permissions:', this.uniIDHasPermission('edit'))
    }
  }
</script>
```