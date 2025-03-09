// The root filesystem location
export const diskImageUrl = "wss://disks.webvm.io/debian_large_20230522_5044875331.ext2";
// The root filesystem backend type
export const diskImageType = "cloud";
// Print an introduction message about the technology
export const printIntro = true;
// Is a graphical display needed
export const needsDisplay = false;
// Executable full path (Required)
export const cmd = "/bin/bash";
// Arguments, as an array (Required)
export const args = ["--login"];
// Optional extra parameters
export const opts = {
	// Environment variables
	env: ["HOME=/root", "TERM=xterm", "USER=root", "SHELL=/bin/bash", "EDITOR=vim", "LANG=en_US.UTF-8", "LC_ALL=C"],
	// Current working directory
	cwd: "/root",
	// User id
	uid: 0,
	// Group id
	gid: 0
};
