## uniIDHasRole

新增于`HBuilderX 3.1.15-alpha`，判断当前用户是否拥有某角色。
Add `HBuilderX 3.1.15-alpha` to determine whether the current user has a certain role.

> 需要在token内缓存角色权限才可使用，请参考：[缓存角色权限](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=cachepermissionintoken)
> You need to cache the role permissions in the token before using. Please refer to: [Cache role permissions](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=cachepermissionintoken)

**在模板内使用**
**Use in templates**

```html
<template>
  <view v-if="uniIDHasRole('admin')">Only visible to the administrator</view>
</template>
```

**在页面/组件js代码中使用**
**For use in page/component js codes**

```html
<template>
  <view>xxx</view>
</template>
<script>
  export default {
    onLoad(){
      console.log('Does the current user have the administrator role:', this.uniIDHasRole('admin'))
    }
  }
</script>
```

## uniIDHasPermission

新增于`HBuilderX 3.1.15-alpha`，判断当前用户是否拥有某权限，注意：admin角色的用户拥有所有权限
Add `HBuilderX 3.1.15-alpha` to determine whether the current user has certain permissions. Note: users in the admin role have all permissions.

> 需要在token内缓存角色权限才可使用，请参考：[缓存角色权限](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=cachepermissionintoken)
> You need to cache the role permissions in the token before using. Please refer to: [Cache role permissions](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=cachepermissionintoken)

**在模板内使用**
**Use in templates**

```html
<template>
  <view v-if="uniIDHasPermission('edit')">Visible only for those have editing permissions</view>
</template>
```

**在页面/组件js代码中使用**
**For use in page/component js codes**

```html
<template>
  <view>xxx</view>
</template>
<script>
  export default {
    onLoad(){
      console.log('Does the current user have the editing permission:', this.uniIDHasPermission('edit'))
    }
  }
</script>
```