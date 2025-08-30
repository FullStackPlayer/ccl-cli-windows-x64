# ccl-cli-windows-x64

适用于 windows-x64 架构的 ccl-cli 包。

## 描述

此软件包为 Windows 操作系统上的 x64 架构专门编译的 ccl 命令行工具。

## 安装

### 使用 npm 安装（推荐）

```bash
npm install -g ccl-cli-windows-x64
```

安装过程中，软件包将自动：
1. 从包含的 zip 文件中解压 ccl.exe 二进制文件
2. 将其放置在适当的 bin 目录中
3. 设置所需的执行权限

## 使用方法

安装完成后，您可以使用 ccl-windows-x64 命令：

```bash
# 显示版本
ccl-windows-x64 --version

# 显示帮助信息
ccl-windows-x64 --help
```

注意：命令名称是 `ccl-windows-x64`，而不仅仅是 `ccl`，这样可以明确表示此二进制文件是为特定架构编译的。

## 架构

此软件包专门为以下架构构建：
- 操作系统：windows
- CPU：x64

它将无法在其他架构或操作系统上工作。

## 发布说明

此 npm 包使用以下文件控制策略：
- `bin/` 目录：作为空目录包含在包中，用于存放解压后的二进制文件
- `zip/` 目录：包含实际的 ccl.zip 文件，用于安装时解压
- `postinstall.js`：安装后脚本，负责解压二进制文件并设置权限
- 使用 `.npmignore` 和 `package.json` 中的 `files` 字段来精确控制包含的文件

## 许可证

MIT