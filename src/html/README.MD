选择器
元素选择器 a {}
伪元素选择器 ::before{} ::after{}
类选择器 .link
属性选择器 [type=radio]{}
伪类选择器 :hover{}
ID选择器 #id{}
组合选择器 [type=checkbox] + label{}
否定选择器 :not(.link) {}
通用选择器 *{}

选择器权重
ID 选择器 #id{} +100
类 属性 伪类 +10
元素 伪元素 +1
其他选择器 +1

!important 优先级最高
元素选择器 优先级高
相同权限 后写的生效

装饰性属性
字重（粗体） font-weight
斜体 font-style: itatic
下划线: text-decoration
指针: cursor
