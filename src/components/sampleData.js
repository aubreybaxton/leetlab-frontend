// export const sampledpData = {
//     title: "Climbing Stairs",
//     category: "dp", // Dynamic Programming
//     description:
//       "You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
//     difficulty: "EASY",
//     tags: ["Dynamic Programming", "Math", "Memoization"],
//     constraints: "1 <= n <= 45",
//     hints:
//       "To reach the nth step, you can either come from the (n-1)th step or the (n-2)th step.",
//     editorial:
//       "This is a classic dynamic programming problem. The number of ways to reach the nth step is the sum of the number of ways to reach the (n-1)th step and the (n-2)th step, forming a Fibonacci-like sequence.",
//     testcases: [
//       {
//         input: "2",
//         output: "2",
//       },
//       {
//         input: "3",
//         output: "3",
//       },
//       {
//         input: "4",
//         output: "5",
//       },
//     ],
//     examples: {
//       JAVASCRIPT: {
//         input: "n = 2",
//         output: "2",
//         explanation:
//           "There are two ways to climb to the top:\n1. 1 step + 1 step\n2. 2 steps",
//       },
//       PYTHON: {
//         input: "n = 3",
//         output: "3",
//         explanation:
//           "There are three ways to climb to the top:\n1. 1 step + 1 step + 1 step\n2. 1 step + 2 steps\n3. 2 steps + 1 step",
//       },
//       JAVA: {
//         input: "n = 4",
//         output: "5",
//         explanation:
//           "There are five ways to climb to the top:\n1. 1 step + 1 step + 1 step + 1 step\n2. 1 step + 1 step + 2 steps\n3. 1 step + 2 steps + 1 step\n4. 2 steps + 1 step + 1 step\n5. 2 steps + 2 steps",
//       },
//     },
//     codeSnippets: {
//       JAVASCRIPT: `/**
//   * @param {number} n
//   * @return {number}
//   */
//   function climbStairs(n) {
//   // Write your code here
//   }

//   // Parse input and execute
//   const readline = require('readline');
//   const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
//   terminal: false
//   });

//   rl.on('line', (line) => {
//   const n = parseInt(line.trim());
//   const result = climbStairs(n);

//   console.log(result);
//   rl.close();
//   });`,
//       PYTHON: `class Solution:
//     def climbStairs(self, n: int) -> int:
//         # Write your code here
//         pass

//   # Input parsing
//   if __name__ == "__main__":
//     import sys

//     # Parse input
//     n = int(sys.stdin.readline().strip())

//     # Solve
//     sol = Solution()
//     result = sol.climbStairs(n)

//     # Print result
//     print(result)`,
//       JAVA: `import java.util.Scanner;

//   class Main {
//     public int climbStairs(int n) {
//         // Write your code here
//         return 0;
//     }

//     public static void main(String[] args) {
//         Scanner scanner = new Scanner(System.in);
//         int n = Integer.parseInt(scanner.nextLine().trim());

//         // Use Main class instead of Solution
//         Main main = new Main();
//         int result = main.climbStairs(n);

//         System.out.println(result);
//         scanner.close();
//     }
//   }`,
//     },
//     referenceSolutions: {
//       JAVASCRIPT: `/**
//   * @param {number} n
//   * @return {number}
//   */
//   function climbStairs(n) {
//   // Base cases
//   if (n <= 2) {
//     return n;
//   }

//   // Dynamic programming approach
//   let dp = new Array(n + 1);
//   dp[1] = 1;
//   dp[2] = 2;

//   for (let i = 3; i <= n; i++) {
//     dp[i] = dp[i - 1] + dp[i - 2];
//   }

//   return dp[n];

//   /* Alternative approach with O(1) space
//   let a = 1; // ways to climb 1 step
//   let b = 2; // ways to climb 2 steps

//   for (let i = 3; i <= n; i++) {
//     let temp = a + b;
//     a = b;
//     b = temp;
//   }

//   return n === 1 ? a : b;
//   */
//   }

//   // Parse input and execute
//   const readline = require('readline');
//   const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
//   terminal: false
//   });

//   rl.on('line', (line) => {
//   const n = parseInt(line.trim());
//   const result = climbStairs(n);

//   console.log(result);
//   rl.close();
//   });`,
//       PYTHON: `class Solution:
//     def climbStairs(self, n: int) -> int:
//         # Base cases
//         if n <= 2:
//             return n

//         # Dynamic programming approach
//         dp = [0] * (n + 1)
//         dp[1] = 1
//         dp[2] = 2

//         for i in range(3, n + 1):
//             dp[i] = dp[i - 1] + dp[i - 2]

//         return dp[n]

//         # Alternative approach with O(1) space
//         # a, b = 1, 2
//         # 
//         # for i in range(3, n + 1):
//         #     a, b = b, a + b
//         # 
//         # return a if n == 1 else b

//   # Input parsing
//   if __name__ == "__main__":
//     import sys

//     # Parse input
//     n = int(sys.stdin.readline().strip())

//     # Solve
//     sol = Solution()
//     result = sol.climbStairs(n)

//     # Print result
//     print(result)`,
//       JAVA: `import java.util.Scanner;

//   class Main {
//     public int climbStairs(int n) {
//         // Base cases
//         if (n <= 2) {
//             return n;
//         }

//         // Dynamic programming approach
//         int[] dp = new int[n + 1];
//         dp[1] = 1;
//         dp[2] = 2;

//         for (int i = 3; i <= n; i++) {
//             dp[i] = dp[i - 1] + dp[i - 2];
//         }

//         return dp[n];

//         /* Alternative approach with O(1) space
//         int a = 1; // ways to climb 1 step
//         int b = 2; // ways to climb 2 steps

//         for (int i = 3; i <= n; i++) {
//             int temp = a + b;
//             a = b;
//             b = temp;
//         }

//         return n == 1 ? a : b;
//         */
//     }

//     public static void main(String[] args) {
//         Scanner scanner = new Scanner(System.in);
//         int n = Integer.parseInt(scanner.nextLine().trim());

//         // Use Main class instead of Solution
//         Main main = new Main();
//         int result = main.climbStairs(n);

//         System.out.println(result);
//         scanner.close();
//     }
//   }`,
//     },
//   };

export const sampledpData = {
  title: "Two Sum",
  description:
    "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice.",
  difficulty: "EASY",
  tags: ["Array", "Hash Table"],
  constraints:
    "2 <= nums.length <= 10^4\n-10^9 <= nums[i] <= 10^9\n-10^9 <= target <= 10^9",
  hints:
    "Use a hash map to store numbers and their indices while iterating.",
  editorial:
    "Iterate through the array while storing seen numbers in a hash map. For each number, check if the complement exists.",
  testcases: [
    {
      input: "nums = [2,7,11,15], target = 9",
      output: "[0,1]",
    },
    {
      input: "nums = [3,2,4], target = 6",
      output: "[1,2]",
    },
    {
      input: "nums = [3,3], target = 6",
      output: "[0,1]",
    },
  ],
  examples: {
    JAVASCRIPT: {
      input: "nums = [2,7,11,15], target = 9",
      output: "[0,1]",
      explanation: "nums[0] + nums[1] = 9",
    },
    PYTHON: {
      input: "nums = [2,7,11,15], target = 9",
      output: "[0,1]",
      explanation: "nums[0] + nums[1] = 9",
    },
    JAVA: {
      input: "nums = [2,7,11,15], target = 9",
      output: "[0,1]",
      explanation: "nums[0] + nums[1] = 9",
    },
  },
  codeSnippets: {
    JAVASCRIPT: `/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  // Write your code here
}

// Input handling
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

let input = [];
rl.on('line', (line) => {
  input.push(line);
});

rl.on('close', () => {
  const nums = JSON.parse(input[0]);
  const target = Number(input[1]);

  const result = twoSum(nums, target);
  console.log(JSON.stringify(result));
});`,
    PYTHON: `class Solution:
    def twoSum(self, nums, target):
        # Write your code here
        pass

if __name__ == "__main__":
    import sys
    nums = eval(sys.stdin.readline().strip())
    target = int(sys.stdin.readline().strip())

    sol = Solution()
    result = sol.twoSum(nums, target)
    print(result)`,
    JAVA: `import java.util.*;

public class Main {
    public static int[] twoSum(int[] nums, int target) {
        // Write your code here
        return new int[]{};
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String numsLine = sc.nextLine();
        int[] nums = Arrays.stream(numsLine.replaceAll("[\\[\\]]", "").split(","))
                           .map(String::trim)
                           .mapToInt(Integer::parseInt)
                           .toArray();

        int target = Integer.parseInt(sc.nextLine());

        int[] result = twoSum(nums, target);
        System.out.println(Arrays.toString(result));
    }
}`,
  },
  referenceSolutions: {
    JAVASCRIPT: `/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
}

// Input handling
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

let input = [];
rl.on('line', (line) => {
  input.push(line);
});

rl.on('close', () => {
  const nums = JSON.parse(input[0]);
  const target = Number(input[1]);

  const result = twoSum(nums, target);
  console.log(JSON.stringify(result));
});`,
    PYTHON: `class Solution:
    def twoSum(self, nums, target):
        seen = {}

        for i, num in enumerate(nums):
            complement = target - num
            if complement in seen:
                return [seen[complement], i]
            seen[num] = i

if __name__ == "__main__":
    import sys
    nums = eval(sys.stdin.readline().strip())
    target = int(sys.stdin.readline().strip())

    sol = Solution()
    result = sol.twoSum(nums, target)
    print(result)`,
    JAVA: `import java.util.*;

public class Main {
    public static int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();

        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (map.containsKey(complement)) {
                return new int[]{map.get(complement), i};
            }
            map.put(nums[i], i);
        }
        return new int[]{};
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String numsLine = sc.nextLine();
        int[] nums = Arrays.stream(numsLine.replaceAll("[\\[\\]]", "").split(","))
                           .map(String::trim)
                           .mapToInt(Integer::parseInt)
                           .toArray();

        int target = Integer.parseInt(sc.nextLine());

        int[] result = twoSum(nums, target);
        System.out.println(Arrays.toString(result));
    }
}`,
  },
}

export const SampleCountString = {
  "title": "Find Duplicate Number",
  "description": "Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive, return the duplicate number. Assume there is only one repeated number.",
  "difficulty": "MEDIUM",
  "tags": [
      "array",
      "binary search",
      "tortoise hare cycle"
  ],
  "companyTags": [],
  "userId": "ce4d3096-b730-4c49-844f-ad6a5e4dced5",
  "examples": {
      "PYTHON": {
          "input": "1 3 4 2 2",
          "output": "2",
          "explanation": "Only number 2 appears more than once."
      },
      "JAVASCRIPT": {
          "input": "3 1 3 4 2",
          "output": "3",
          "explanation": "Only number 3 appears more than once."
      }
  },
  "constraints": "2 ≤ |nums| ≤ 10^5, 1 ≤ nums[i] ≤ |nums| - 1",
  "hints": null,
  "editorial": null,
  "testcases": [
      {
          "input": "1 3 4 2 2",
          "output": "2"
      },
      {
          "input": "3 1 3 4 2",
          "output": "3"
      },
      {
          "input": "2 2 2 2 2",
          "output": "2"
      }
  ],
  "codeSnippets": {
      "JAVA": "import java.util.*;\n\npublic class Main {\n    public static int findDuplicate(int[] nums) {\n        // Write your code here\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int[] nums = Arrays.stream(sc.nextLine().trim().split(\" \")).mapToInt(Integer::parseInt).toArray();\n        System.out.println(findDuplicate(nums));\n    }\n}",
      "PYTHON": "def find_duplicate(nums):\n    # Write your code here\n    pass\n\nimport sys\nnums = list(map(int, sys.stdin.read().strip().split()))\nprint(find_duplicate(nums))",
      "JAVASCRIPT": "const fs = require('fs');\n\nfunction findDuplicate(nums) {\n    // Write your code here\n}\n\nconst nums = fs.readFileSync(0, 'utf-8').trim().split(' ').map(Number);\nconsole.log(findDuplicate(nums));"
  },
  "referenceSolutions": {
      "JAVA": "import java.util.*;\npublic class Main {\n  public static void main(String[] args) {\n    Scanner sc = new Scanner(System.in);\n    int[] nums = Arrays.stream(sc.nextLine().trim().split(\" \")).mapToInt(Integer::parseInt).toArray();\n    int slow = nums[0], fast = nums[0];\n    do {\n        slow = nums[slow];\n        fast = nums[nums[fast]];\n    } while (slow != fast);\n    slow = nums[0];\n    while (slow != fast) {\n        slow = nums[slow];\n        fast = nums[fast];\n    }\n    System.out.println(slow);\n  }\n}",
      "PYTHON": "import sys\nnums = list(map(int, sys.stdin.read().strip().split()))\nslow = fast = nums[0]\nwhile True:\n    slow = nums[slow]\n    fast = nums[nums[fast]]\n    if slow == fast:\n        break\nslow = nums[0]\nwhile slow != fast:\n    slow = nums[slow]\n    fast = nums[fast]\nprint(slow)",
      "JAVASCRIPT": "const nums = require('fs').readFileSync(0, 'utf-8').trim().split(' ').map(Number);\nlet slow = nums[0], fast = nums[0];\ndo {\n    slow = nums[slow];\n    fast = nums[nums[fast]];\n} while (slow !== fast);\nslow = nums[0];\nwhile (slow !== fast) {\n    slow = nums[slow];\n    fast = nums[fast];\n}\nconsole.log(slow);"
  }
}


export const sampleStringProblem = {
  title: "Valid Palindrome",
  description:
    "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers. Given a string s, return true if it is a palindrome, or false otherwise.",
  difficulty: "EASY",
  tags: ["String", "Two Pointers"],
  constraints:
    "1 <= s.length <= 2 * 10^5\ns consists only of printable ASCII characters.",
  hints:
    "Consider using two pointers, one from the start and one from the end, moving towards the center.",
  editorial:
    "We can use two pointers approach to check if the string is a palindrome. One pointer starts from the beginning and the other from the end, moving towards each other.",
  testcases: [
    {
      input: "A man, a plan, a canal panama",
      output: "true",
    },
    {
      input: "race a car",
      output: "false",
    },
    {
      input: " madam",
      output: "true",
    },
  ],
  examples: {
    JAVASCRIPT: {
      input: 's = "A man, a plan, a canal panama"',
      output: "true",
      explanation: '"amanaplanacanalpanama" is a palindrome.',
    },
    PYTHON: {
      input: 's = "A man, a plan, a canal panama"',
      output: "true",
      explanation: '"amanaplanacanalpanama" is a palindrome.',
    },
    JAVA: {
      input: 's = "A man, a plan, a canal panama"',
      output: "true",
      explanation: '"amanaplanacanalpanama" is a palindrome.',
    },
  },
  codeSnippets: {
    JAVASCRIPT: `/**
   * @param {string} s
   * @return {boolean}
   */
  function isPalindrome(s) {
    // Write your code here
  }
  
  // Add readline for dynamic input handling
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
  });
  
  // Process input line
  rl.on('line', (line) => {
    // Call solution with the input string
    const result = isPalindrome(line);
  
    // Output the result
    console.log(result ? "true" : "false");
    rl.close();
  });`,
    PYTHON: `class Solution:
      def isPalindrome(self, s: str) -> bool:
          # Write your code here
          pass
  
  # Input parsing
  if __name__ == "__main__":
      import sys
      # Read the input string
      s = sys.stdin.readline().strip()
  
      # Call solution
      sol = Solution()
      result = sol.isPalindrome(s)
  
      # Output result
      print(str(result).lower())  # Convert True/False to lowercase true/false`,
    JAVA: `import java.util.Scanner;
  
  public class Main {
      public static String preprocess(String s) {
          return s.replaceAll("[^a-zA-Z0-9]", "").toLowerCase();
      }
  
      public static boolean isPalindrome(String s) {
         // Write your code here
         return false;
      }
  
      public static void main(String[] args) {
          Scanner sc = new Scanner(System.in);
          String input = sc.nextLine();
  
          boolean result = isPalindrome(input);
          System.out.println(result ? "true" : "false");
      }
  }
  `,
  },
  referenceSolutions: {
    JAVASCRIPT: `/**
   * @param {string} s
   * @return {boolean}
   */
  function isPalindrome(s) {
    // Convert to lowercase and remove non-alphanumeric characters
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  
    // Check if it's a palindrome
    let left = 0;
    let right = s.length - 1;
  
    while (left < right) {
      if (s[left] !== s[right]) {
        return false;
      }
      left++;
      right--;
    }
  
    return true;
  }
  
  // Add readline for dynamic input handling
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
  });
  
  // Process input line
  rl.on('line', (line) => {
    // Call solution with the input string
    const result = isPalindrome(line);
  
    // Output the result
    console.log(result ? "true" : "false");
    rl.close();
  });`,
    PYTHON: `class Solution:
      def isPalindrome(self, s: str) -> bool:
          # Convert to lowercase and keep only alphanumeric characters
          filtered_chars = [c.lower() for c in s if c.isalnum()]
  
          # Check if it's a palindrome
          return filtered_chars == filtered_chars[::-1]
  
  # Input parsing
  if __name__ == "__main__":
      import sys
      # Read the input string
      s = sys.stdin.readline().strip()
  
      # Call solution
      sol = Solution()
      result = sol.isPalindrome(s)
  
      # Output result
      print(str(result).lower())  # Convert True/False to lowercase true/false`,
    JAVA: `import java.util.Scanner;
  
  public class Main {
      public static String preprocess(String s) {
          return s.replaceAll("[^a-zA-Z0-9]", "").toLowerCase();
      }
  
      public static boolean isPalindrome(String s) {
          s = preprocess(s);
          int left = 0, right = s.length() - 1;
  
          while (left < right) {
              if (s.charAt(left) != s.charAt(right)) return false;
              left++;
              right--;
          }
  
          return true;
      }
  
      public static void main(String[] args) {
          Scanner sc = new Scanner(System.in);
          String input = sc.nextLine();
  
          boolean result = isPalindrome(input);
          System.out.println(result ? "true" : "false");
      }
  }
  `,
  },
};
