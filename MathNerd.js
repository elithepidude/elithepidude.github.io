/*
   Created with ExtForge
   https://jwklong.github.io/extforge
*/
(async function(Scratch) {
	const variables = {};
	const script = document.createElement('script');
	script.src = 'https://cdn.jsdelivr.net/npm/nerdamer@latest/all.min.js';
	document.head.appendChild(script);
	const menuIconURI =
"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgd2lkdGg9Ijg3LjUzMiIKICAgaGVpZ2h0PSI4Ny41MzIiCiAgIHZpZXdCb3g9IjAgMCA4Ny41MzIgODcuNTMyIgogICB2ZXJzaW9uPSIxLjEiCiAgIGlkPSJzdmczIgogICBzb2RpcG9kaTpkb2NuYW1lPSJzaW1wbGUuc3ZnIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIxLjQgKDg2YThhZDcsIDIwMjQtMTAtMTEpIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxkZWZzCiAgICAgaWQ9ImRlZnMzIiAvPgogIDxzb2RpcG9kaTpuYW1lZHZpZXcKICAgICBpZD0ibmFtZWR2aWV3MyIKICAgICBwYWdlY29sb3I9IiM1MDUwNTAiCiAgICAgYm9yZGVyY29sb3I9IiNmZmZmZmYiCiAgICAgYm9yZGVyb3BhY2l0eT0iMSIKICAgICBpbmtzY2FwZTpzaG93cGFnZXNoYWRvdz0iMCIKICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCIKICAgICBpbmtzY2FwZTpwYWdlY2hlY2tlcmJvYXJkPSIxIgogICAgIGlua3NjYXBlOmRlc2tjb2xvcj0iIzUwNTA1MCIKICAgICBpbmtzY2FwZTp6b29tPSI2LjY1NjQ5MTQiCiAgICAgaW5rc2NhcGU6Y3g9IjM2LjgwNjE3NyIKICAgICBpbmtzY2FwZTpjeT0iMzUuNzU0NTcyIgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkyMCIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDA5IgogICAgIGlua3NjYXBlOndpbmRvdy14PSItOCIKICAgICBpbmtzY2FwZTp3aW5kb3cteT0iLTgiCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJzdmczIiAvPgogIDxnCiAgICAgc3Ryb2tlLXdpZHRoPSIwIgogICAgIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIKICAgICBpZD0iZzMiPgogICAgPHBhdGgKICAgICAgIGQ9Ik0uMDAxIDQzLjc2N0MuMDAxIDE5LjU5NSAxOS41OTQuMDAxIDQzLjc2Ni4wMDFzNDMuNzY2IDE5LjU5NCA0My43NjYgNDMuNzY2LTE5LjU5NCA0My43NjYtNDMuNzY2IDQzLjc2NlMwIDY3LjkzOSAwIDQzLjc2NyIKICAgICAgIGZpbGw9IiM4MjE5YmYiCiAgICAgICBpZD0icGF0aDEiCiAgICAgICBzdHlsZT0iZmlsbDojNmIxYTBmO2ZpbGwtb3BhY2l0eToxIiAvPgogICAgPHBhdGgKICAgICAgIGQ9Ik01LjE2NSA0My43NjdjMC0yMS4zMiAxNy4yODItMzguNjAyIDM4LjYwMi0zOC42MDJzMzguNjAyIDE3LjI4MiAzOC42MDIgMzguNjAyLTE3LjI4MiAzOC42MDItMzguNjAyIDM4LjYwMlM1LjE2NSA2NS4wODcgNS4xNjUgNDMuNzY3IgogICAgICAgZmlsbD0iI2E4MTJmZiIKICAgICAgIGlkPSJwYXRoMiIKICAgICAgIHN0eWxlPSJmaWxsOiNkODM1MWY7ZmlsbC1vcGFjaXR5OjEiIC8+CiAgPC9nPgogIDxwYXRoCiAgICAgaWQ9InBhdGgyMSIKICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZS13aWR0aDo0O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtwYWludC1vcmRlcjptYXJrZXJzIHN0cm9rZSBmaWxsIgogICAgIGQ9Im0gMjIuNDYwOTM4LDE0LjIyMjY1NiBjIC0zLjcwNDMwNiwwLjI0NDA4NCAtNC44NzM0MDksNi4xOTkyNzUgLTEuMjE4NzYsNy41MjI5MzEgMi43MDAzMTIsMC44MTU1MTIgMS45MDk5MDMsMy44MjYwMSAxLjk1MjY5Niw1Ljk1Njk4NiAtMC4xNTA1NDgsNy42MjIxNjIgMC4yOTkzLDE1LjIzNzcyMyAxLjA5NTI3NCwyMi44MTQ4NDkgMC4yNTMzOTMsNC40NTYxMTUgMC43MTA4NzQsOC45ODIyOTIgMC4yODA0NjUsMTMuNDE2OTk2IC0wLjg4ODIsMi4yMTg4OCAtNS4xNDEwNTksMS42MjgyNzQgLTQuODgzMDE5LDUuMDA1MDQxIC0wLjQzOTQ3NiwyLjY2NiAyLjE0ODIzMyw0LjU5MzA3NCA0LjYxMjMzOSw0LjM2NjA0NCAyLjgwNzE5MiwtMC4xMTc2NzYgNS42NjU3NzIsMC4yNjYzMzcgOC40NDAzNzUsLTAuMjQxMzYyIDMuMDk2MDQyLC0wLjc4MjQ4NCAzLjU4MjUzNywtNS4yODQwODcgMS4wNzk5LC03LjAzMDc1NyAtMS45ODc5MzQsLTEuNDUwODQ4IC0wLjc5MTMxMywtNC4xNDc1NzkgLTEuMDk0NDQzLC02LjIwMzk2NiAwLjAwNjUsLTEwLjM5OTA1NyAtMi4wMTM2ODksLTIwLjcxMDQyNSAtMS40NzI4ODYsLTMxLjExOTY0MyAtMC44NDUxMzksLTIuOTkwMTc3IDAuNDc2MjcyLC02Ljg1NDc4MiA0LjIzMDI5NywtNS41MTYwMjggNi40MzAwNjcsMC4zMzM4NDUgMTIuOTAyODcyLDAuMjE0NjUxIDE5LjMwOTQyOSwwLjc1MDk4NyAyLjUxMjQ3NCwxLjMwMTU4NiAxLjEyMTk5LDQuNTU2MDQ1IDEuNDg5NzAyLDYuODEwNTU1IDAuMjMwMzEsMTAuNjQ4NTc3IDAuMDQwNDcsMjEuMjk3MDcgLTAuMDM0MjcsMzEuOTQ1ODg4IC0wLjYyODMxNSwyLjU0OTg5NyAtNC41ODEyNDMsMi4zMzQyNTMgLTQuNjA5OTc0LDUuNDEyMDQ2IC0wLjUwMjE3NywzLjkxODg5NyA0LjAwNTI5Nyw0LjkwNjQ1NyA3LjAwNjUzOCw0LjQ5MzAyOSAyLjUwODQ3NywtMC4xNjI2MDcgNS42Mjk3NzQsMC44NTMxNyA3LjUzNjgzMywtMS4zNjEyNjIgMS42MzA1MDUsLTEuOTUxNDc5IDAuNzAyMDU5LC00Ljg4MDI5NyAtMS4xNjI2NzMsLTYuMjQ2NDA5IC0xLjU5NTg2MywtMi40Njc5NTQgLTAuMzg1ODU0LC01LjYzNDc1MSAtMC43Mjk5ODYsLTguNDA0MDIxIDAuMDgzNzcsLTkuOTgwMTc1IDAuMjIxNDE3LC0xOS45NzQ4MzMgLTAuMDk0MjgsLTI5Ljk0NDk5NyAwLjI0NTQ4NiwtMi45MjI4MzYgNS4wNTU4NjcsLTIuNDU0MjkyIDQuMzE3OTYxLC02LjAzNjgyNSAwLjAyMzI5LC0zLjU1NDAyMSAtNC4wMTM4MjIsLTQuMDQ4MzExIC02LjcyNjgxMSwtNC4yMDcyIC02LjIwOTc1NiwtMC4zODIzMTUgLTEyLjQwNDQwMiwtMC45ODE2NTcgLTE4LjYzNDUxNywtMC45NDAyMzkgLTYuMTQ2NTc5LC0wLjI1OTQ2IC0xMi4zMTQwMDUsLTAuMzI2NDI2IC0xOC40Mzc5NTUsLTAuOTQ5MzUgLTAuNzUzOTksLTAuMDU5MjggLTEuNDk5MTQ3LC0wLjI3NjIwOCAtMi4yNTIyNDEsLTAuMjkzMjkzIHoiIC8+Cjwvc3ZnPgo=";

	if (!Scratch.extensions.unsandboxed) {
		alert("This extension needs to be unsandboxed to run!")
		return
	}

	const ExtForge = {
		Broadcasts: new function() {
			this.raw_ = {};
			this.register = (name, blocks) => {
				this.raw_[name] = blocks;
			};
			this.execute = async (name) => {
				if (this.raw_[name]) {
					await this.raw_[name]();
				};
			};
		},

		Variables: new function() {
			this.raw_ = {};
			this.set = (name, value) => {
				this.raw_[name] = value;
			};
			this.get = (name) => {
				return this.raw_[name] ?? null;
			}
		},

		Vector: class {
			constructor(x, y) {
				this.x = x;
				this.y = y;
			}

			static from(v) {
				if (v instanceof ExtForge.Vector) return v
				if (v instanceof Array) return new ExtForge.Vector(Number(v[0]), Number(v[1]))
				if (v instanceof Object) return new ExtForge.Vector(Number(v.x), Number(v.y))
				return new ExtForge.Vector()
			}

			add(v) {
				return new Vector(this.x + v.x, this.y + v.y);
			}

			set(x, y) {
				return new Vector(x ?? this.x, y ?? this.y)
			}
		},

		Utils: {
			setList: (list, index, value) => {
				[...list][index] = value;
				return list;
			},
			lists_foreach: {
				index: [0],
				value: [null],
				depth: 0
			},
			countString: (x, y) => {
				return y.length == 0 ? 0 : x.split(y).length - 1
			}
		}
	}

	class Extension {
		getInfo() {
			return {
				"id": "mathnerd",
				"name": "MathNerd",
				"color1": "#d8351f",
				menuIconURI,
				"blocks": [{
					"opcode": "mathnerd_eval",
					"text": "eval [exp]",
					"blockType": "reporter",
					"arguments": {
						"exp": {
							"type": "string",
							"defaultValue": "2 + 2"
						}
					}
				}, {
					"opcode": "mathnerd_solve",
					"text": "solve [exp] for [var]",
					"blockType": "reporter",
					"arguments": {
						"exp": {
							"type": "string",
							"defaultValue": "2x + 3 = 7"
						}, "var": {
							"type": "string",
							"defaultValue": "x"
						}
					}
				}, {
					"opcode": "mathnerd_comma",
					"text": "get [val] of [str]",
					"blockType": "reporter",
					"arguments": {
						"str": {
							"type": "string",
							"defaultValue": "-1,1"
						},
						"val": {
							"type": "string",
							"defaultValue": "1"
						}
					}
				}, {
					"opcode": "mathnerd_scope",
					"text": "set [var] to [val]",
					"blockType": "command",
					"arguments": {
						"var": {
							"type": "string",
							"defaultValue": "x"
						},
						"val": {
							"type": "string",
							"defaultValue": "7"
						}
					}
				}, {
					"opcode": "mathnerd_function",
					"text": "make function [fun] ( [var] ) = [exp]",
					"blockType": "command",
					"arguments": {
						"fun": {
							"type": "string",
							"defaultValue": "f"
						},
						"var": {
							"type": "string",
							"defaultValue": "x,y"
						},
						"exp": {
							"type": "string",
							"defaultValue": "x+y"
						}
					}
				}, {
					"opcode": "mathnerd_delete",
					"text": "delete [var]",
					"blockType": "command",
					"arguments": {
						"var": {
							"type": "string",
							"defaultValue": "x"
						}
					}
				}, {
					"opcode": "mathnerd_deletefun",
					"text": "delete function [fun]",
					"blockType": "command",
					"arguments": {
						"fun": {
							"type": "string",
							"defaultValue": "f"
						}
					}
				}, {
					"opcode": "mathnerd_cleanse",
					"text": "clear scope",
					"blockType": "command",
					"arguments": {
						"scope": {
							"type": "string",
							"defaultValue": "x"
						}
					}
				}]
			}
		}
		async mathnerd_eval(args) {
			return nerdamer(args["exp"]).evaluate();
		}
		async mathnerd_solve(args) {
			return nerdamer.solveEquations(args["exp"],args["var"]);
		}
		async mathnerd_comma(args) {
			const str = args["str"];
			const index = Number(args["val"]) - 1;
			const result = str.split(',')[index];
			//console.log(result); // This will now run
			return result;
		}
		async mathnerd_function(args) {
			const vars = args["var"];
			const varsplit = vars.split(',');
			nerdamer.setFunction(args["fun"], varsplit, args["exp"]);
		}
		async mathnerd_deletefun(args) {
			nerdamer.setFunction(args["fun"], "delete");
		}
		async mathnerd_scope(args) {
			nerdamer.setVar(args["var"], args["val"]);
		}
		async mathnerd_delete(args) {
			nerdamer.setVar(args["var"], "delete");
		}
		async mathnerd_cleanse(args) {
			nerdamer.clearVars();
		}
	}

	let extension = new Extension(); //
	// code compiled from extforge
	(async () => {
	})();

	Scratch.extensions.register(extension);
})(Scratch);