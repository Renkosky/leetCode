## 二叉树

二叉树的每个结点至多只有二棵子树(不存在度大于 2 的结点)，二叉树的子树有左右之分，次序不能颠倒。二叉树的第 i 层至多有 2^{i-1}个结点；深度为 k 的二叉树至多有 2^k-1 个结点；对任何一棵二叉树 T，如果其终端结点数为 n_0，度为 2 的结点数为 n_2，则 n_0=n_2+1。
　　一棵深度为 k，且有 2^k-1 个节点称之为满二叉树；深度为 k，有 n 个节点的二叉树，当且仅当其每一个节点都与深度为 k 的满二叉树中，序号为 1 至 n 的节点对应时，称之为完全二叉树。

对于任何一个二叉树终端节点为 n0,度为 2 的节点数为 n2,则有 n0 = n2+1
总节点数 n = B+1 边+1

## 满二叉树

一颗深度为 k 且有 2^{k-1} 个节点的树

## 完全二叉树

深度为 k，n 个节点的树，当且仅当每一个节点与深度为 k 的满二叉树编号 1-n 的节点一一对应

## 二叉排序树/

又称二叉查找树

二叉排序树或者是一棵空树，或者是具有下列性质的二叉树：
（1）若左子树不空，则左子树上所有结点的值均小于它的根结点的值；
（2）若右子树不空，则右子树上所有结点的值均大于它的根结点的值；
（3）左、右子树也分别为二叉排序树；
（4）没有键值相等的节点。

### 构造二叉排序树

BST 构造的时候，如果根节点为空，则首先序列的第一个作为根节点，然后第二个与根节点比较：小的放到左边，大的放到右边；根节点不为空的时候，待插入的节点跟根节点比较：小的往左子树去比较，大的往右子树去比较。比较过程中，待插入节点只作为某节点的左或右节点插入，而不会变动之前的节点位置。

### 还原二叉排序树

知道以下遍历结果可以还原 BST

- 先序或者后序中的一个
- 先序和中序两个
- 先序和后序两个

## 平衡二叉树

平衡二叉搜索树（Self-balancing binary search tree）又被称为 AVL 树（有别于 AVL 算法），且具有以下性质：它是一 棵空树或它的左右两个子树的高度差的绝对值不超过 1，并且左右两个子树都是一棵平衡二叉树。平衡二叉树的常用实现方法有红黑树、AVL、替罪羊树、Treap、伸展树等。 最小二叉平衡树的节点总数的公式如下 F(n)=F(n-1)+F(n-2)+1 这个类似于一个递归的数列，可以参考 Fibonacci(斐波那契)数列，1 是根节点，F(n-1)是左子树的节点数量，F(n-2)是右子树的节点数量。

## 树转换二叉树

树的先序，二叉树的先序
树的后序，二叉树的中序

## 遍历
