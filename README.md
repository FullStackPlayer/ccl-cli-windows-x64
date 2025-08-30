# ccl-cli-windows-x64

适用于 windows-x64 架构的 ccl-cli 包。

## 描述

此软件包是为 Windows 操作系统上的 x64 架构专门编译的 ccl 命令行工具。

## 安装

### 使用 npm 安装（推荐）

```bash
npm install -g ccl-cli-windows-x64
```

## 使用方法

安装完成后，您可以使用 `ccl-windows-x64` 命令：

```bash
# 显示版本
ccl-windows-x64 --version

# 显示帮助信息
ccl-windows-x64 --help
```

注意：命令名称是 `ccl-windows-x64`，而是 `ccl`，这样可以明确表示此二进制文件是为特定架构编译的。如果你想要直接使用 `ccl` 命令，请全局安装 `ccl-cli-installer` 包。

## 架构

此软件包专门为以下架构构建：
- 操作系统：windows
- CPU：x64

它无法在其他架构或操作系统上工作。

## 许可证

MIT