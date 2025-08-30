#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const AdmZip = require('adm-zip');

// 确保 bin 目录存在
const binDir = path.join(__dirname, 'bin');
if (!fs.existsSync(binDir)) {
  fs.mkdirSync(binDir, { recursive: true });
}

// 解压 zip 文件
const zipPath = path.join(__dirname, 'zip', 'ccl.zip');

// 检查 zip 文件是否存在
if (!fs.existsSync(zipPath)) {
  console.error('Error: ccl.zip file not found in zip directory');
  console.error('Please ensure the ccl.zip file is present in the zip directory before installing');
  process.exit(1);
}

const zip = new AdmZip(zipPath);

try {
  console.log('Extracting ccl binary...');
  zip.extractAllTo(binDir, true);
    
  // 检查是否解压成功
  const cclPath = path.join(binDir, 'ccl.exe');
  if (fs.existsSync(cclPath) === false) {
    console.error('Error: ccl.exe binary not found in zip file');
    process.exit(1);
  }
  
  // 设置可执行权限（在 Windows 上可能不需要，但保留以确保兼容性）
  try {
    fs.chmodSync(cclPath, 0o755);
  } catch (chmodError) {
    // 在 Windows 上 chmod 可能会失败，这是正常的
    console.log('Note: chmod not supported on this platform, but that\'s OK on Windows');
  }
  
  console.log('ccl binary extracted and permissions set successfully!');
} catch (error) {
  console.error('Error extracting zip file:', error.message);
  process.exit(1);
}