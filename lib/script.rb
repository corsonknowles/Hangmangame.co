array = File.readlines('dictionary.txt').map { |e| e.gsub( / *\n+/, "," )}

file_name = 'test_output.txt'
File.open(file_name, "a+") do |f|
  f.puts array
end
